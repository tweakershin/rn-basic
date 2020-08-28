import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Header(props) {
  // return <Text style={styles.headerText}>{props.text}</Text>;
  // return (
  //   <Text style={[styles.headerText, { color: props.color }]}>
  //     {props.children}
  //   </Text>
  // );
  return <Text style={[styles.headerText, props.style]}>{props.children}</Text>;
}

// export default class Header extends React.Component {
//   render() {
//     return <Text style={styles.headerText}>{this.props.children}</Text>;
//   }
// }

const styles = StyleSheet.create({
  headerText: {
    fontSize: 100,
    fontWeight: "bold",
  },
});
