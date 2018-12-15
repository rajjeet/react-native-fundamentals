import React from 'react';
import {createAppContainer, createStackNavigator} from "react-navigation";
import {Home} from "./app/views/Home";
import {Contact} from "./app/views/Contact";
import Video from "./app/views/Video";
import VideoDetail from './app/views/VideoDetail';
import Register from "./app/views/Register";
import Login from "./app/views/Login";
import Quiz from "./app/sections/Quiz";
import QuizFinish from "./app/views/QuizFinish";
import Blog from "./app/views/Blog";
import BlogDetail from "./app/views/BlogDetail";

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
        },
        LoginRoute: {
            screen: Login
        },
        QuizRoute: {
            screen: Quiz
        },
        FinishRoute: {
            screen: QuizFinish
        },
        BlogRoute: {
            screen: Blog
        },
        BlogDetailRoute: {
            screen: BlogDetail
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

