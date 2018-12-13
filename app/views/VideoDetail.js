import React from 'react';
import {View, Text, WebView} from 'react-native';

class VideoDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        header: null
    };

    componentDidMount() {

    }

    render() {
        let tubeId = this.props.navigation.getParam('ytubeId', 'NO VIDEO');
        let tubeUrl = `https://www.youtube.com/embed/${tubeId}`;
        return (
            <WebView
                style={{marginTop: 20}}
                javaScriptEnabled={true}
                source={{uri: tubeUrl}}
            />
        );
    }
}

export default VideoDetail;