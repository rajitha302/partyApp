import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Button, Text, Title } from "react-native-paper";

const windowWidth = Dimensions.get("window").width;

const image = {
  uri: "https://ak.picdn.net/shutterstock/videos/14540665/thumb/1.jpg",
};

export default function headerCard() {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <ImageBackground source={image} style={styles.image}>
          <View style={styles.cardcontent}>
            <Title style={styles.title}>House Party</Title>
            <Button
              mode="contained"
              onPress={() => console.log("Pressed")}
              color="#FECE01"
              // color="#1db954"
              uppercase={false}
              style={styles.innerBtn}
              labelStyle={styles.labelStyle}
            >
              In Progress
            </Button>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    width: windowWidth - 60,
    height: 160,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    resizeMode: "cover",
    justifyContent: "center",
  },
  cardcontent: {
    flex: 1,
    justifyContent: "flex-end",
    margin: 15,
  },
  innerBtn: {
    width: "40%",
    height: "30%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  labelStyle: {
    color: "#fff",
  },
  title: {
    color: "#fff",
  },
});
