import React from "react";
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import TelBookItem from "./TelBookItem";
// function TelBookItem(props) {
//   const { item } = props;
//   return (
//     <TouchableOpacity
//       style={{
//         width: "100%",
//         flexDirection: "row",
//         borderBottomWidth: 1,
//         borderBottomColor: "#e9e9e9",
//       }}
//       onPress={() => {
//         alert(`${item.tel}로 전화연결`);
//       }}
//     >
//       <Text
//         style={{
//           flex: 1,
//           padding: 5,
//           paddingLeft: 10,
//         }}
//       >
//         {item.name}
//       </Text>
//       <Text style={{ flex: 1 }}>{item.tel}</Text>
//     </TouchableOpacity>
//   );
// }

import Hangul, { disassemble } from "hangul-js";

export default class TelBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }
  render() {
    const data = [
      {
        key: "1",
        name: "신윤수",
        tel: "010-8607-3050",
      },
      {
        key: "2",
        name: "김철수",
        tel: "010-1234-5678",
      },
      {
        key: "3",
        name: "임영희",
        tel: "010-3212-4158",
      },
      {
        key: "4",
        name: "고원희",
        tel: "010-4621-1234",
      },
      {
        key: "5",
        name: "신수지",
        tel: "010-4601-1234",
      },
    ];
    // console.log(disassemble(data[0].name, true));

    const newData = data.map((item) => {
      const name = item.name;
      const daName = disassemble(name, true);
      const chosungArr = daName.map((c) => {
        return c[0];
      });
      const chosung = chosungArr.join("");

      return {
        ...item,
        chosung: chosung,
      };
    });
    // console.log(newData);

    return (
      <View
        style={{
          marginTop: 40,
          width: "100%",
          flex: 1,
          justifyContent: "flex-start",
        }}
      >
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 5,
            marginBottom: 10,
            height: 40,
            paddingLeft: 10,
          }}
          value={this.state.searchText}
          onChangeText={(text) => {
            this.setState({ searchText: text });
          }}
        />
        <FlatList
          data={newData}
          // data={data}

          renderItem={({ item }) => {
            if (this.state.searchText === "") {
              return <TelBookItem item={item} />;
            }
            // if (this.state.searchText === item.name) {
            // if (item.name.startsWith(this.state.searchText)) {
            if (item.chosung.includes(this.state.searchText)) {
              return <TelBookItem item={item} />;
            } else if (item.name.includes(this.state.searchText)) {
              return <TelBookItem item={item} />;
            }
          }}
        />
      </View>
    );
  }
}
