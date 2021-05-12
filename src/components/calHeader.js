import React from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar, IconButton, Button, Title } from "react-native-paper";

const styles = StyleSheet.create({
  searchbar: {
    borderRadius: 10,
    flexDirection: "row-reverse",
  },
  input: {
    position: "absolute",
    right: 5,
    top: 8,
    width: "100%",
    color: "#cccccc",
  },
  title: {
    color: "#fff",
    fontSize: 24,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default function header({ route }) {
  return (
    <View>
      <IconButton
        icon="arrow-left"
        color={"#fff"}
        size={28}
        style={{
          width: "10%",
        }}
        onPress={() => route.navigate("Home")}
      />
      <View style={styles.head}>
        <Title style={styles.title}>Calendar</Title>
      </View>
      <Searchbar
        placeholder="Search"
        style={styles.searchbar}
        inputStyle={styles.input}
        iconColor="#cccccc"
        placeholderTextColor="#cccccc"
      />
    </View>
  );
}
