import React, { Component } from 'react';
import {  
    Text,
    View,
    Image,
    WebView
} from 'react-native';

export default class MePage extends Component {
    static navigationOptions = {
        title: '製作者'
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <WebView
                    source={{uri: 'https://soniczsonic.github.io'}}
                    style={{flex: 1}}
                />
            </View>
        )
    }
}
