import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BasicInfo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome to the new WAX app for your card adventures!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1f2029",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#008080",
  },
});

export default BasicInfo;
