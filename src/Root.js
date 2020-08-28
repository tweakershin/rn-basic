import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";

import HelloWorld from "./components/HelloWorld";

import Cat from "./components/Cat";
import GreetingGroup from "./components/GreetingGroup";
import Blink from "./components/Blink";
import BlinkFunction from "./components/BlinkFunction";
import StyleApp from "./components/StyleApp";
import SizedBox from "./components/SizedBox";
import Greeting from "./components/Greeting";
import Box from "./components/Box";
import Header from "./components/Header";
import BaseTextInput from "./components/BaseTextInput";
import ButtonGroup from "./components/ButtonGroup";
import SampleButton from "./components/SampleButton";
import MyButton from "./components/MyButton";
import FlatListBasics from "./components/FlatListBasics";
import TelBook from "./components/TelBook";
import SectionListBasics from "./components/SectionListBasics";

export default function Root(props) {
  return (
    <View style={styles.container}>
      {/* <Text>Hello React Native!</Text>
      <Text>By. 신윤수</Text>
      <HelloWorld userName="신윤수" textColor="tomato" />
      <Cat /> */}
      {/* <Greeting name="신윤수"></Greeting>
      <Greeting name="김철수"></Greeting>
      <Greeting name="고원희"></Greeting> */}

      {/* <GreetingGroup
        nameList={["신윤수", "김철수", "고원희", "한수지", "아린"]}
      /> */}
      {/* <BlinkFunction innerText="깜빡깜빡" />
      <Blink innerText="깜빡입니다." /> */}

      {/* <StyleApp /> */}
      {/* <SizedBox /> */}

      {/* <Box title="상품 목록">
        <View>
          <Image
            source={require("../assets/splash.png")}
            style={{ width: 200, height: 200 }}
          />
          <Text>내용</Text>
        </View>
      </Box> */}
      {/* <Header text="제목">제목</Header> */}
      {/* <Header color="red">제목</Header> */}
      {/* <Header style={{ color: "blue" }}>제목</Header> */}
      {/* <BaseTextInput /> */}
      {/* <ButtonGroup /> */}
      {/* <SampleButton /> */}

      {/* <MyButton title="버튼1" onPress={() => alert("버튼1 클릭")} />
      <MyButton title="버튼2" onPress={() => alert("버튼2 클릭")} /> */}
      {/* <FlatListBasics /> */}
      {/* <TelBook /> */}
      {/* <SectionListBasics /> */}
      <TelBook />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
