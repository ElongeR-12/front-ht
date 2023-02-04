import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from "react-native-vector-icons/Entypo";
import Fontisto from "react-native-vector-icons/Fontisto";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Explorer from "../screens/Explorer";
import Roadtrip from "../screens/RoadTrip";
import Connexion from "../screens/Connexion";
import Langues from "../screens/Langues";
const Tab = createBottomTabNavigator();
const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#062e70",
        tabBarContainer: { padding: 10 },
        tabBarLabelStyle: {
          fontWeight: "normal",
          fontSize: 15,
          marginBottom: 5,
        },
        tabBarStyle: { height: 60, padding: 5 },
        headerShown: false,
        headerTitleStyle: {
          lineHeight: 30,
          fontSize: 30,
          fontWeight: "bold",
          color: "black",
        },
      }}
    >
      <Tab.Screen
        name={"Explorer"}
        component={Explorer}
        labelStyle={{ fontWeight: "bold", fontSize: 30 }}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="search" size={25} color={color} />
          ),
          headerShown: true,
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name={"Road Trips"}
        component={Roadtrip}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="map" size={25} color={color} />
          ),
          headerShown: true,
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name={"Connexion"}
        component={Connexion}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="user" size={25} color={color} />
          ),
          headerShown: true,
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name={"Langues"}
        component={Langues}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="google-translate"
              size={25}
              color={color}
            />
          ),
          headerShown: true,
          headerTitleAlign: "center",
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
