import React from "react";
import { View } from "react-native";

const CardSection = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    position: "relative"
  }
};

export {CardSection};
