import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function TelBookItem(props) {
  const { item } = props;
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#e9e9e9",
      }}
      onPress={() => {
        alert(`${item.tel}로 전화연결`);
      }}
    >
      <Text
        style={{
          flex: 1,
          padding: 5,
          paddingLeft: 10,
        }}
      >
        {item.name}
      </Text>
      <Text style={{ flex: 1 }}>{item.tel}</Text>
    </TouchableOpacity>
  );
}
