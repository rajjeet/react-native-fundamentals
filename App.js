import React from 'react';
import {createAppContainer, createStackNavigator} from "react-navigation";
import {Home} from "./app/views/Home";
import {Contact} from "./app/views/Contact";
import Video from "./app/views/Video";
import VideoDetail from './app/views/VideoDetail';
import Register from "./app/views/Register";

const AppNavigator = createStackNavigator(
    {
        HomeRoute: {
            screen: Home
        },
        ContactRoute: {
            screen: Contact
        },
        LessonsRoute: {
            screen: Video
        },
        VideoDetailRoute: {
            screen: VideoDetail
        },
        RegisterRoute: {
            screen: Register
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

