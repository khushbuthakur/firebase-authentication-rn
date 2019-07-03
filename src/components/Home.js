import React from "react";
import { Text } from "react-native";
import { Button, Card, CardSection } from "./common";

const Home = props => {
  return (
    <Card>
      <CardSection>
        <Text style={styles.textStyle}>
          Hi user! You are authenticated and have safely entered the portal
        </Text>
      </CardSection>
      <CardSection>
        <Button onPress={props.signOut}>Log out</Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  textStyle: {
    alignSelf: "center",
    fontSize: 18,
    padding: 10
  }
};

export default Home;
