import React from "react";
import { View, Button, Text } from "react-native";

export default class ButtonGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "신윤수",
      count: 0,
    };
  }

  onPressButton1() {
    alert("버튼 클릭2");
  }
  alertStateName() {
    alert(this.state.name);
    this.addCount();
  }
  addCount() {
    const count = this.state.count + 1;
    this.setState({ count });
  }

  render() {
    return (
      <View>
        <Button title="눌러주세요" onPress={() => alert("눌러주세요.")} />
        <Button title="버튼2클릭" onPress={this.onPressButton1} />
        <Button title="이름보기" onPress={this.alertStateName.bind(this)} />

        <Text>총 버튼이 {this.state.count}번 터치되었음.</Text>
      </View>
    );
  }
}
