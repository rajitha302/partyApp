import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  Text,
  Title,
  Caption,
  Subheading,
  Paragraph,
} from "react-native-paper";

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
          <Subheading style={styles.subheading}>Club Night</Subheading>
          <Paragraph>lorem ipsum dolor sit amet, consectetur..</Paragraph>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function nearbyEvents() {
  return (
    <View style={styles.container}>
      <Title>Near by Events</Title>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ padding: 10 }}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        <EventCard img="https://i.pinimg.com/originals/38/58/74/3858746809d1b4018391ebc0389566b7.jpg" />
        <EventCard img="https://static.toiimg.com/photo/72980238/iStock-882906374.jpg?width=748&resize=4" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 20, marginLeft: 20 },
  card: {
    flexDirection: "row",
    height: null,
    width: 250,
    backgroundColor: "#fff",
    marginRight: 10,
    borderRadius: 10,
    elevation: 6,
    overflow: "hidden",
  },
  cardImg: {
    flex: 2,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
    margin: 5,
    borderRadius: 10,
  },
  cardContent: { flex: 3, paddingVertical: 10, paddingHorizontal: 5 },
  subheading: {
    fontWeight: "bold",
  },
});
