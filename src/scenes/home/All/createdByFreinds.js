import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Title, Caption, Subheading, Paragraph } from "react-native-paper";

const EventCard = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <View style={styles.cardImg}>
          <Image
            source={{
              uri: props.img,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.cardContent}>
          <Caption>Fri, Dec 06, 2021</Caption>
          <Subheading style={styles.subheading}>{props.name}</Subheading>
          <Paragraph>lorem ipsum dolor sit amet, consectetur..</Paragraph>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function createdByFreinds() {
  return (
    <View style={styles.container}>
      <Title>Created by freinds</Title>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ padding: 10 }}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        <EventCard
          img="https://prods3.imgix.net/images/articles/2018_09/Feature-poker.jpg?auto=format%2Ccompress&dpr=2.63&ixjsv=2.2.3&q=38&w=370"
          name="Poker Night"
        />
        <EventCard
          img="https://i.insider.com/5b0601b71ae6621c008b4aa2?width=1136&format=jpeg"
          name="Running"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 20, marginLeft: 20 },
  card: {
    flexDirection: "column",
    height: null,
    width: 200,
    backgroundColor: "#fff",
    marginRight: 10,
    borderRadius: 10,
    elevation: 6,
    overflow: "hidden",
  },
  cardImg: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
    height: 100,
    resizeMode: "cover",
    borderRadius: 10,
  },
  cardContent: { flex: 1, paddingVertical: 10, paddingHorizontal: 5 },
  subheading: {
    fontWeight: "bold",
  },
});
