/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import {Header,Button,LoginForm,Spinner} from './src/Components';
import firebase from 'firebase';

export default class TheBall extends Component {
state = {loggedIn:null};

  componentWillMount(){
    firebase.initializeApp({
        apiKey: "AIzaSyCntX0OExMFqAGu4Ezzww3aY0mT8odxWn8",
        authDomain: "maliksapp-2e912.firebaseapp.com",
        databaseURL: "https://maliksapp-2e912.firebaseio.com",
        projectId: "maliksapp-2e912",
        storageBucket: "maliksapp-2e912.appspot.com",
        messagingSenderId: "180018897312"
      });

    firebase.auth().onAuthStateChanged((user) => {
        if(user){
          this.setState({loggedIn:true});
        }
        else{
          this.setState({loggedIn:false});
        }
    });
}

renderContent() {
  switch (this.state.loggedIn) {
      case true :
        return <Button onPress={()=> firebase.auth().signOut()} text="Log Out"/>
      case false :
        return <LoginForm/>;
      default :
        return <Spinner size="large"/>;
    }
}

  render() {
      return (
        <View >
          <Header headerText="The Ball"/>
          {this.renderContent()}
        </View>
      );
  }
}
AppRegistry.registerComponent('TheBall', () => TheBall);
