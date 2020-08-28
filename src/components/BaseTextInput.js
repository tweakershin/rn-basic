import React from "react";
import { TextInput, View, Text } from "react-native";

export default class BaseTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  onChangeTextAction(text) {
    this.setState({ text });
  }

  render() {
    return (
      <View style={{ padding: 10, width: "80%" }}>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            width: "100%",
          }}
          placeholder="텍스트 입력"
          value={this.state.text}
          // onChangeText={(text) => this.setState({ text })}
          onChangeText={this.onChangeTextAction.bind(this)}
        />
        <Text>입력된 텍스트: {this.state.text}</Text>
      </View>
    );
  }
}
