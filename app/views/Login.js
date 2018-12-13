import React from 'react';
import {Alert, StyleSheet, AsyncStorage, View, Text, TextInput, TouchableHighlight} from 'react-native';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

    }

    static navigationOptions = {
        header: null
    };

    cancelLogin = () => {
        Alert.alert('Attention', 'Login cancelled');
        this.props.navigation.navigate('HomeRoute');
    };

    loginUser = () => {
        if (!this.state.username) {
            Alert.alert('Attention', 'Please enter username');
        } else if (!this.state.password) {
            Alert.alert('Attention', 'Please enter password');
        } else {
            AsyncStorage.getItem('userLoggedIn', (err, result) => {
                if (result !== 'none') {
                    Alert.alert('Attention', 'User is already logged on');
                    this.props.navigation.navigate('HomeRoute');
                } else {
                    AsyncStorage.getItem(this.state.username, (err, result) => {
                        if (result !== null) {
                            if (result !== this.state.password) {
                                Alert.alert('Attention', 'Password is incorrect');
                            } else {
                                AsyncStorage.setItem('userLoggedIn', this.state.username, (err, result) => {
                                    Alert.alert('Success', `${this.state.username} Logged in`);
                                    this.props.navigation.state.params.onGoBack();
                                    this.props.navigation.goBack();
                                });
                            }
                        } else {
                            Alert.alert('Attention', `No account for ${this.state.username}`);
                        }
                    });
                }
            });
        }
    };


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Login</Text>
                <Text style={styles.label}>Enter Username</Text>
                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({username: text})}
                    value={this.state.username}
                />

                <Text style={styles.label}>Enter Password</Text>
                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({password: text})}
                    value={this.state.password}
                    secureTextEntry={true}
                />

                <TouchableHighlight onPress={this.loginUser} underlayColor='#31e981'>
                    <Text style={styles.buttons}>
                        Login
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.cancelLogin} underlayColor='#31e981'>
                    <Text style={styles.buttons}>
                        Cancel
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%',
        paddingTop: '10%'
    },
    heading: {
        fontSize: 16,
        flex: 1
    },
    inputs: {
        flex: 1,
        width: '80%',
        padding: 10,
        backgroundColor: '#eee'
    },
    label: {
        paddingBottom: 10
    },
    buttons: {
        marginTop: 15,
        fontSize: 16
    }
});


export default Login;