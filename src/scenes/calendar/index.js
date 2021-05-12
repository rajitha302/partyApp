import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import Header from "../../components/calHeader";
import Svg from "../../components/headerBg";

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
    padding: 20,
    top: 10,
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
    </View>
  );
};

export default index;
