import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import BasicInfo from "./Pages/BasicInfo";
import Navbar from "./Components/Navbar";
import Shop from "./Pages/Shop";
import Signin from "./Pages/Signin";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen
          name="Sigin"
          component={Signin}
          options={{ title: "Signin" }}
        /> */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Shop"
          component={Shop}
          options={false}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Profile" }}
        />

        <Stack.Screen
          name="BasicInfo"
          component={BasicInfo}
          options={{ title: "BasicInfo" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
