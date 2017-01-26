import React, {Component} from 'react';
import {
    Text,
    View,
    NavigatorIOS

} from 'react-native';

import styles from '../Styles/Main';
import USBoxList from './USBoxList';

class USBox extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title:'在映电影',
                    component:USBoxList
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
export {USBox as default};