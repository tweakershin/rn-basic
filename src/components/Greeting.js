import React from "react";

import { View, Text } from "react-native";

export default class Greeting extends React.Component {
  render() {
    return (
      <View>
        <Text>안녕, {this.props.name}!</Text>
      </View>
    );
  }
}
