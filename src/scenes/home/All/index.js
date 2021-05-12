import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import HeaderCard from "./headerCard";
import NearEvents from "./nearbyEvents";
import FreindsEvents from "./createdByFreinds";

export default function index() {
  return (
    <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <HeaderCard />
        <NearEvents />
        <FreindsEvents />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
  },
});
