import * as React from "react";
import { Text, View, Dimensions, width } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import All from "../../scenes/home/All";

const totalWidth = Dimensions.get("screen").width;

function Breakfirst() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Breakfirst</Text>
    </View>
  );
}
function Lunch() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Breakfirst</Text>
    </View>
  );
}
function Dinner() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Breakfirst</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      initialRouteName="All"
      initialLayout={{ width: Dimensions.get("window").width }}
      sceneContainerStyle={{
        backgroundColor: "transparent",
      }}
      tabBarOptions={{
        labelStyle: { fontSize: 12 },
        tabStyle: { width: width },
        activeTintColor: "#fff",
        scrollEnabled: true,
        indicatorStyle: {
          backgroundColor: "#fff",
          width: totalWidth / 6,
          left: totalWidth / 8,
        },
        tabStyle: {
          justifyContent: "center",
        },
        style: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Tab.Screen name="All" component={All} />
      <Tab.Screen name="Breakfirst" component={Breakfirst} />
      <Tab.Screen name="Lunch" component={Lunch} />
      <Tab.Screen name="Dinner" component={Dinner} />
    </Tab.Navigator>
  );
}
