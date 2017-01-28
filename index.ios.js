/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TabBarIOS,
} from 'react-native';

import styles from './app/Styles/Main';
import MovieList from './app/Components/MovieList';
import USBoxList from './app/Components/USBoxList';
import icons from './app/Assets/Icons';
import Featured from './app/Components/Featured';
import USBox from './app/Components/USBox';
import Search from './app/Components/Search';
import User from './app/Components/User';

const REQUEST_URL = 'https://api.douban.com/v2/movie/top250';

class MovieTalk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'user'
        };
    }


    render() {
        return (
            <TabBarIOS barTintColor="darkslateblue" tintColor="white">
                <TabBarIOS.Item

                    icon={{uri: icons.star, scale: 4.6}}
                    title="推荐电影"
                    selectedIcon={{uri: icons.starActive, scale: 4.6}}
                    selected={this.state.selectedTab === 'featured'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'featured'
                        });
                    }}
                >
                    <Featured />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={{uri: icons.board, scale: 4.6}}
                    title="在映电影"
                    seletedIcon={{uri: icons.boardActive, scale: 4.6}}
                    selected={this.state.selectedTab === 'us_box'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'us_box'
                        });
                    }}
                >
                    <USBox />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={{uri: icons.search, scale: 4.6}}
                    title="搜索"
                    selected={this.state.selectedTab === 'search'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'search'
                        });
                    }}>
                    <Search />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={{uri: icons.user, scale: 4.6}}
                    title="我的"
                    selected={this.state.selectedTab === 'user'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'user'
                        });
                    }}>
                    <User />
                </TabBarIOS.Item>
            </TabBarIOS>

        );
    }
}
AppRegistry.registerComponent('MovieTalk', () => MovieTalk);
