import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default class MyButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.buttonWrap}>
          <Text style={styles.buttonText}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonWrap: {
    backgroundColor: "tomato",
    padding: 7,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
