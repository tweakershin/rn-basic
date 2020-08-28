import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.textWrap}>
        <Text style={{ fontSize: 60, color: this.props.textColor }}>
          {this.props.userName}이 전달 되었습니다.
        </Text>
        <Text style={styles.textStyle}>HelloWord</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textWrap: {
    backgroundColor: "green",
  },
  textStyle: {
    color: "red",
    fontSize: 40,
    fontStyle: "italic",
  },
});
// export default class HelloWorld extends Component {
//   render() {
//     return (
//       <View style={{ backgroundColor: "green" }}>
//         <Text style={{ color: "red", fontSize: 40, fontStyle: "italic" }}>
//           HelloWord
//         </Text>
//       </View>
//     );
//   }
// }
