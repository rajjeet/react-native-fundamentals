import React from 'react';
import {StyleSheet, Text, View, Platform, Image} from 'react-native';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: true};
    }

    toggleUser = () => {
        this.setState(previousState => {
            return {isLoggedIn: !previousState.isLoggedIn}
        });
    };

    render() {
        let display = this.state.isLoggedIn ? 'Sample User' : this.props.message;
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
        backgroundColor: Platform.OS === 'android' ? '#31e981' : '#35605a',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#000000'
    }
});