import React from "react";
import { View, Text } from "react-native";

export default class Blink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };

    setInterval(() => {
      this.setState({ visible: !this.state.visible });
    }, 2000);

    // setInterval(
    //   function () {
    //     this.setState({ visible: !this.state.visible });
    //   }.bind(this),
    //   2000
    // );
  }

  render() {
    const { innerText } = this.props;
    return (
      <View>
        <Text>
          {this.state.visible ? innerText : " "}
          {/* {innerText} */}
        </Text>
      </View>
    );
  }
}
