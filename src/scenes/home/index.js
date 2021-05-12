import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Button } from "react-native";
import Svg from "../../components/headerBg";
import Header from "../../components/header";
import TabBar from "../../navigator/tabBar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  headerbg: {
    width: "100%",
    position: "absolute",
    top: -30,
  },
  headercontent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});

const index = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.headerbg}>
        <Svg />
      </View>
      <View style={styles.headercontent}>
        <Header route={navigation} />
      </View>
      <TabBar />
    </View>
  );
};

export default index;
