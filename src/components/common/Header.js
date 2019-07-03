import React from "react";
import { Text, View } from "react-native";

const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#F8F8F8",
    height: 60,
    paddingTop: 0,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 10,
    position: "relative"
  },
  textStyle: {
    fontSize: 20,
    color: "#000"
  }
};

// since we will export all common components in index and export conditionally, we can't do default export here
// instead this needs to be exported as : export {Header : Header} -> key value pair
export { Header };
