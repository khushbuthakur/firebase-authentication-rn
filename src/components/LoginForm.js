import React, { Component } from "react";
import { Text } from "react-native";
import firebase from "firebase";
import { Button, Card, CardSection, Input, Spinner } from "./common";

export default class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    error: null,
    loading: false,
    signIn: false
  };

  onButtonPress = () => {
    const { email, password } = this.state;

    this.setState({
      error: null,
      loading: true
    });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.onLoginSuccess())
      .catch(() => {
        console.log("in signup");
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => this.onLoginSuccess())
          .catch(err => {
            console.log(err);
            this.setState({
              error: err.message,
              loading: false
            });
          });
      });
  };

  onLoginSuccess = () => {
    console.log("in success");
    this.setState({
      email: "",
      password: "",
      error: null,
      loading: false,
      signIn: true
    });
  };


  render() {
    let { email, password, error, loading } = this.state;
    // if (this.props.isLoggedIn == true) {
    //   return (
    //     <Card>
    //       <CardSection>
    //         <Button onPress={this.signout}>Log Out</Button>
    //       </CardSection>
    //     </Card>
    //   );
    // }
    return (
      <Card>
        <CardSection>
          <Input
            value={email}
            label="E-mail"
            placeholder="user@email.com"
            onChangeText={email => {
              this.setState({ email });
            }}
          />
        </CardSection>

        <CardSection>
          <Input
            value={password}
            label="Password"
            placeholder="password"
            secureTextEntry={true}
            onChangeText={password => {
              this.setState({ password });
            }}
          />
        </CardSection>
        {error != null && <Text style={styles.errorText}>{error}</Text>}
        <CardSection>
          {loading ? (
            <Spinner />
          ) : (
            <Button onPress={this.onButtonPress}> Login </Button>
          )}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorText: {
    color: "red",
    fontSize: 20,
    alignSelf: "center"
  }
};
