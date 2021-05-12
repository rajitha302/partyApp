import React from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar, IconButton, Button, Title } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
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
    <View style={styles.container}>
      <IconButton
        icon="arrow-left"
        color={"#fff"}
        size={28}
        style={{
          width: "10%",
          left: -10,
        }}
        onPress={() => console.log("Pressed")}
      />
      <View style={styles.head}>
        <Title style={styles.title}>Search</Title>

        <Button
          icon="calendar"
          mode="text"
          color="#fff"
          onPress={() => route.navigate("Calendar")}
          uppercase={false}
        >
          Calendar
        </Button>
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
