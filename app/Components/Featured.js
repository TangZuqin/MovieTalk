'use strict';

import React, {Component} from 'react';
import {
    Text,
    View,
    NavigatorIOS

} from 'react-native';

import styles from '../Styles/Main';
import MovieList from './MovieList';

class Featured extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: '推荐电影',
                    component: MovieList
                }}
                shadowHidden={true}
                barTintColor='darkslateblue'
                titleTextColor='rgba(255,255,255,0.8)'
                tintColor='rgba(255,255,255,0.8)'
                translucent={true}
            />
        );
    }
}

export {Featured as default};