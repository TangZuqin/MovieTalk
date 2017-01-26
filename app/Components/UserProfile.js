 'use strict';
 
 import React, { Component } from 'react';
 import {
   Text,
   View,
   Image,
   ListView,
   ActivityIndicator,
   TouchableHighlight,
   NavigatorIOS
 } from 'react-native';
 
 import styles from '../Styles/Main';
 import Login from './Login';
 
 class UserProfile extends Component {
   constructor(props) {
     super(props);
   }
   
   render() {
     return(
       <Login />
     );
   }
 }
 
 export { UserProfile as default };