import React from "react";
import {
  TouchableOpacity,
  TouchableHighlight,
  Text,
  Image,
} from "react-native";

export default class SampleButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={() => alert("버튼 클릭")}>
        {/* <Text>나의 버튼</Text> */}
        <Image source={require("../../assets/mybutton.png")} />
      </TouchableOpacity>
    );
  }
}
