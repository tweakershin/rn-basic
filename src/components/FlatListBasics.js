import React from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";

export default class FlatListBasics extends React.Component {
  render() {
    const data = [
      { key: "영수" },
      { key: "철수" },
      { key: "민수" },
      { key: "윤수" },
      { key: "영희" },
      { key: "영수" },
      { key: "현수" },
      { key: "재호" },
    ];

    // const data = [
    //   { name: "영수" },
    //   { name: "철수" },
    //   { name: "민수" },
    //   { name: "윤수" },
    //   { name: "영희" },
    //   { name: "현수" },
    //   { name: "재호" },
    // ];
    return (
      <View
        style={{
          marginTop: 20,
          width: "100%",
          justifyContent: "flex-start",
          flex: 1,
        }}
      >
        <FlatList
          data={data}
          renderItem={({ item, seperator, index }) => {
            return (
              <TouchableOpacity>
                <View
                  style={{ borderBottomWidth: 1, borderBottomColor: "gray" }}
                >
                  <Text style={{ fontSize: 20, paddingLeft: 14 }}>
                    {item.key}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}
