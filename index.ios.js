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
      //Can get the following information by creating the firebase account. Just copy and paste it after creatig your own project.
        apiKey: "*******",
        authDomain: "*********",
        databaseURL: "https://******.firebaseio.com",
        projectId: "*******",
        storageBucket: "******.appspot.com",
        messagingSenderId: "**********"
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
