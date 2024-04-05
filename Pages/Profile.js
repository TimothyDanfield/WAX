import React from "react";
import { useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Navbar from "../Components/Navbar";
import BasicInfo from "./BasicInfo";

const Profile = ({ navigation, setUserToken }) => {

  const signOut = async () => {
    try {
      await AsyncStorage.clear();
      setUserToken(null)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.accountPage}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Text style={styles.name}>Wax</Text>
        </Pressable>
        <Pressable onPress={signOut}>
          <Text style={styles.name}>Sign Out</Text>
        </Pressable>
      </View>
      <View style={styles.settingsHeader}>
        {/* <Text style={styles.separatorLine}></Text> */}
        <Text style={styles.text}>Account Settings</Text>
        <Text style={styles.separatorLine}></Text>
      </View>
      <View style={styles.settings}>
        <Pressable onPress={() => navigation.navigate("BasicInfo")}>
          <Text style={styles.settingsText}>Basic Info</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.settingsText}>Order History</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.settingsText}>Review App in App Store</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.settingsText}>Share App</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.settingsText}>Wax FAQ</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.settingsText}>Contact Support</Text>
        </Pressable>
      </View>
      <View style={styles.emptyView}></View>
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "gray",
    padding: 10,
    width: 100,
    margin: 25,
  },
  accountPage: {
    flex: 1,
    backgroundColor: "#1f2029",
    paddingTop: 100,
  },
  header: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
  },
  name: {
    color: "#ffcc00",
    fontWeight: "bold",
    fontSize: 14,
    textTransform: "uppercase",
  },
  text: {
    fontWeight: "bold",
    fontSize: 14,
    textTransform: "uppercase",
    color: "#008080",
  },
  settingsHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
  },
  settings: {
    flex: 6,
    padding: 25,
    justifyContent: "space-around",
  },

  separatorLine: {
    flex: 1,
    height: 1,
    marginLeft: 5,
    marginRight: 5,
    borderColor: "#008080",
    borderWidth: 1,
  },

  settingsText: {
    color: "white",
  },

  emptyView: {
    flex: 8,
  },
});

export default Profile;
