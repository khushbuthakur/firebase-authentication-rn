import React from "react";
import { Text, TouchableOpacity } from "react-native";

// a generic button component, so that it can be used wherver we want
const Button = ({ onPress, children }) => {
  let { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    padding: 10
  },
  //   full width button
  buttonStyle: {
    flex: 1, // expand and fill the content as much as it can
    alignSelf: "stretch", // position itself using flexbox rules, stretch to fill limits of container
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5
  }
};

// this makes component available to all other parts of app
export { Button };
