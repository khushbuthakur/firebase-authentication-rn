import React from "react";
import { Text, View, TextInput } from "react-native";

const Input = ({
  label,
  onChangeText,
  value,
  placeholder,
  secureTextEntry
}) => {
  let { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={inputStyle}
        autoCorrect={false}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry == undefined ? false : true}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: "#000",
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
};

export { Input };
