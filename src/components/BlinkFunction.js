import React, { useState } from "react";

import { View, Text } from "react-native";

export default function BlinkFunction(props) {
  const [visible, setVisible] = useState(true);
  setInterval(() => {
    setVisible(!visible);
  }, 2000);
  return (
    <View>
      <Text>{visible ? props.innerText : ""}</Text>
    </View>
  );
}
