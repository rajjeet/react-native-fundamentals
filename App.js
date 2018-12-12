import React from 'react';
import {Home} from "./app/views/Home";
import {Contact} from "./app/views/Contact";
import {createAppContainer, createStackNavigator} from "react-navigation";

const AppNavigator = createStackNavigator(
    {
        HomeRoute: {
            screen: Home
        },
        ContactRoute: {
            screen: Contact
        }
    },
    {
        initialRouteName: 'HomeRoute'
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return (
            <AppContainer/>
        );
    }
}

