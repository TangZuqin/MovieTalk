'use strict';

import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    ListView,
    ActivityIndicator,
    TouchableHighlight,
    NavigatorIOS,
    WebView,
} from 'react-native';

import styles from '../Styles/Main';
import UserProfile from './UserProfile';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    onNavigationStateChange(state){
        console.log(state);
    }

    render() {
        return (
            <WebView
                startInLoadingState={true}
                // bounces={false}
                // scrollEnabled={false}
                // contentInset={{top:10,right:10,bottom:10,left:10}}
                source={{uri: "https://ninghao.net"}}
                onNavigationStateChange={this.onNavigationStateChange.bind(this)}
            />
        );
    }
}

export {Login as default};