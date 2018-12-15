import React from 'react';
import {StyleSheet, Text, ScrollView, Image} from 'react-native';

const aboutApp = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum metus et sapien interdum, eget imperdiet magna tempor. Integer consequat non dolor sed laoreet. Maecenas lobortis laoreet elementum. Nullam luctus tincidunt nisl ac placerat. Sed ultricies turpis diam, ut imperdiet dui egestas sit amet. Nullam dictum rutrum diam quis mollis. Aenean vitae ante non nunc sodales pulvinar. Donec porta facilisis lectus, eu condimentum sem semper sit amet. Donec in velit at nibh venenatis hendrerit. Donec ornare nibh ut ligula convallis, vitae tincidunt ipsum suscipit.

Quisque augue ex, maximus non dolor sed, dictum aliquet nunc. Proin consequat nunc a iaculis finibus. Duis porta et odio eu condimentum. Quisque ac ex turpis. Ut et semper elit. Phasellus maximus laoreet orci in mattis. Suspendisse euismod eu erat et pellentesque. Pellentesque iaculis ipsum purus, nec sollicitudin sapien finibus sed. Integer dictum congue mattis. Fusce ut metus vitae lorem feugiat euismod a pharetra lorem. Vivamus non velit turpis. Quisque diam risus, consequat porttitor porttitor et, pretium vitae dui.

Proin sagittis fermentum erat, in consequat justo volutpat in. Sed placerat metus id ex vestibulum finibus. Nam tempor bibendum eros, vitae vulputate purus rutrum ac. Fusce sed mi vel mauris commodo interdum. Curabitur eleifend sem sit amet nulla placerat, nec congue ex accumsan. Donec et eleifend metus, at efficitur lorem. Duis pulvinar aliquet efficitur. Fusce et arcu auctor, eleifend eros non, malesuada lorem. Suspendisse volutpat est eget hendrerit vulputate. Nullam venenatis, massa eget varius faucibus, diam magna tempus elit, ut aliquet orci tortor vitae metus. Ut eros orci, sollicitudin vitae purus in, porta hendrerit urna. Quisque posuere mattis metus, sit amet consectetur dui accumsan at. Pellentesque quis dolor porttitor, porta nibh vel, auctor leo. Donec sit amet enim posuere, consequat sem sit amet, euismod ex. Quisque interdum sit amet nunc ut porttitor. Etiam sed ante massa.

Vestibulum quis pulvinar neque. Nam ultrices sem vel arcu imperdiet vulputate. Nunc mollis dignissim enim, convallis lacinia diam dapibus quis. Curabitur molestie, orci convallis interdum malesuada, nisi purus volutpat turpis, eget venenatis sem risus vitae purus. Aliquam venenatis, nisl et iaculis efficitur, enim turpis efficitur augue, sit amet aliquam diam orci non lorem. Donec aliquam ultricies ante. Proin vitae velit leo. Sed et maximus ipsum, id imperdiet lacus. Nunc et ex commodo, finibus nisi sit amet, ornare neque. Nunc et ex nulla. Nam interdum volutpat libero et molestie. Aenean mattis elit sed dictum euismod. Integer vehicula nulla id rutrum maximus.

Curabitur nec mauris ante. Sed commodo eros metus, eu cursus enim laoreet sed. Donec euismod lorem ac risus vestibulum blandit. Vestibulum blandit egestas gravida. Maecenas vitae tristique sem, non varius urna. Etiam feugiat quam nec mauris congue dictum. Aliquam placerat, odio id congue aliquet, odio elit maximus tortor, ac posuere lacus turpis in leo. Nunc ac mattis magna, eu rutrum enim. Aliquam urna neque, cursus ac placerat quis, pretium sit amet mi. Nunc at tempus lorem, sed scelerisque enim. Suspendisse vitae turpis porttitor, tempor velit eget, pellentesque sem.`;


class About extends React.Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        header: null
    };


    componentDidMount() {

    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Image style={styles.pics} source={require('../sections/img/150.png')}/>
                <Text style={styles.aboutTitle}>Who We Are</Text>
                <Text style={styles.aboutText}>{aboutApp}</Text>
                <Text onPress={() => this.props.navigation.goBack()} style={styles.backButton}>GO BACK</Text>
            </ScrollView>
        )

    }
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 30,
        backgroundColor: '#ffffff'
    },
    pics: {
        height: 300
    },
    aboutTitle: {
        paddingTop: 10,
        textAlign: 'center'
    },
    aboutText: {
        paddingBottom: 20
    },
    backButton: {
        paddingBottom: 50,
        textAlign: 'center'
    }
});

export default About;