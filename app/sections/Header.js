import React from 'react';
import {StyleSheet, Text, View, AsyncStorage, Platform, Image, Alert} from 'react-native';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            loggedUser: false
        };
    }

    refresh(){
        this.verifyUser();
    }

    componentDidMount() {
        this.verifyUser();
    }

    verifyUser = () => {
        AsyncStorage.getItem('userLoggedIn', (err, result) => {
            if (result === 'none') {
            } else if (result === null) {
                AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                });
            } else {
                this.setState({
                    isLoggedIn: true,
                    loggedUser: result
                })
            }
        });
    };

    toggleUser = () => {
        if (this.state.isLoggedIn) {
            AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                this.setState({
                    isLoggedIn: false,
                    loggedUser: false
                });
                Alert.alert('Attention', 'User logged out')
            });
        } else {
            this.props.navigation.navigate('LoginRoute', {onGoBack: () => this.refresh()});
        }
    };

    render() {
        let display = this.state.isLoggedIn ? this.state.loggedUser : this.props.message;
        return (
            <View style={styles.headStyle}>
                <Image style={styles.logoStyle} source={require('./img/android_icon_256.png')}/>
                <Text style={styles.headText} onPress={this.toggleUser}>{display}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logoStyle: {
        flex: .3,
        width: undefined,
        height: undefined
    },
    headText: {
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 20,
        flex: 1
    },
    headStyle: {
        paddingTop: 30,
        paddingRight: 10,
        backgroundColor: Platform.OS !== 'android' ? '#31e981' : '#35605a',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#000000'
    }
});