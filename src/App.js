import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header, Spinner } from "./components/common";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
export default class App extends Component {
  state = {
    isLoggedIn: null
  };

  componentWillMount = () => {
    firebase.initializeApp({
      apiKey: "AIzaSyAEHK-KbsHr-nECzSsfEJ6qeXmsC_KNjyc",
      authDomain: "auth-43cd1.firebaseapp.com",
      databaseURL: "https://auth-43cd1.firebaseio.com",
      projectId: "auth-43cd1",
      storageBucket: "",
      messagingSenderId: "11352237723",
      appId: "1:11352237723:web:db906e4cf2edd227"
    });

    firebase.auth().onAuthStateChanged(user => {
      let isLoggedIn = this.state.isLoggedIn;
      if (user) {
        isLoggedIn = true;
      } else {
        isLoggedIn = false;
      }

      if (isLoggedIn != this.state.isLoggedIn) {
        this.setState({
          isLoggedIn: isLoggedIn
        });
      }
    });
  };

  signOut = () => {
    firebase.auth().signOut();
  };

  renderContent = () => {
    switch (this.state.isLoggedIn) {
      case true:
        return <LoginForm isLoggedIn={this.state.isLoggedIn} />;
      case false:
        return <Home signOut={this.signOut} />;
      default:
        return <Spinner />;
    }
  };

  render() {
    return (
      <View>
        <Header headerText="Authenticaton" />
        {/* <LoginForm isLoggedIn={this.state.isLoggedIn} /> */}
        {this.renderContent()}
      </View>
    );
  }
}
