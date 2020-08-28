import React, { Component } from "react";
import { Text, View } from "react-native";

export default class SizedBox extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          // alignItems: "center",
          flexDirection: "column",
        }}
      >
        <View style={{ width: 50, height: 50, backgroundColor: "blue" }}></View>
        <View
          style={{ width: 100, height: 100, backgroundColor: "black" }}
        ></View>
        <View
          style={{ width: 150, height: 150, backgroundColor: "red" }}
        ></View>
      </View>
    );
  }
}
