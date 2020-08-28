import React, { Component } from "react";

import { View, Image, Text } from "react-native";

// export default class Cat extends Component {
//   render() {
//     const imageSource = {
//       uri:
//         "https://ichef.bbci.co.uk/news/1024/cpsprodpb/83D7/production/_111515733_gettyimages-1208779325.jpg",
//     };

//     return (
//       <View>
//         <Image source={imageSource} style={{ width: 200, height: 200 }} />
//       </View>
//     );
//   }
// }

export default function Cat(props) {
  const imageSource = {
    uri:
      "https://ichef.bbci.co.uk/news/1024/cpsprodpb/83D7/production/_111515733_gettyimages-1208779325.jpg",
  };

  const { width, height } = props;

  return (
    <View>
      <Image
        source={imageSource}
        style={{ width: width || 200, height: height || 200 }}
      />
    </View>
  );
}
