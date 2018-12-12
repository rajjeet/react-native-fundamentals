import React from 'react';
import {View, TouchableHighlight, StyleSheet, Alert, Text, TextInput} from 'react-native';
import {Header} from "../sections/Header";

export class Contact extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            msg: 'Enter Message',
            name: 'Enter Name',
            email: 'Enter your email address'
        };
    }

    clearFields = () => this.setState({msg: '', name: '', email: ''});


    sendMessage = () => {
        Alert.alert(this.state.name, this.state.msg);
        this.props.navigation.goBack();
    };


    render() {
        return (
            <View style={styles.container}>
                <Header message='Press to Login'/>
                <Text style={styles.heading}>Contact Us</Text>

                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({name: text})}
                    value={this.state.name}
                />
                <TextInput
                    style={styles.multiInput}
                    onChangeText={(text) => this.setState({msg: text})}
                    value={this.state.msg}
                    multiline={true}
                    numberOfLines={4}
                />
                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({email: text})}
                    value={this.state.email}
                />
                <TouchableHighlight onPress={this.sendMessage} underlayColor="#31e981">
                    <Text style={styles.buttons}>
                        Send Message
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.clearFields} underlayColor="#31e981">
                    <Text style={styles.buttons}>
                        Reset Form
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%'
    },
    heading: {
        fontSize: 16,
        flex: 1
    },
    multiInput: {
        flex: 2,
        width: '80%',
        paddingTop: 20,
        borderColor: 'gray',
        borderWidth: 1
    },
    inputs: {
        flex: 1,
        width: '80%',
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,

    },
    buttons: {
        marginTop: 15,
        fontSize: 16,
        backgroundColor: '#eee',
    }
});
