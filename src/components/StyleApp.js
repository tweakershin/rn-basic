import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class StyleApp extends Component {
  render() {
    return (
      <View>
        <Text style={{ color: "red" }}> text1 </Text>
        <Text style={styles.bigBlue}> text2 </Text>
        <Text style={[styles.bigBlue, styles.red]}> text3 </Text>
        <Text style={[styles.red, styles.bigBlue]}> text4 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
});
