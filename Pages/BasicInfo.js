import React, { useEffect, useState } from "react";
import { Linking, Pressable, StyleSheet, Text, View, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from '@expo/vector-icons'

const BasicInfo = ({ navigation }) => {
  const [user, setUser] = useState()


  const fetchUser = async () => {
    try {
      const userObj = await AsyncStorage.getItem("User")
      return userObj
    } catch (error) {
      console.log(error)
    }

  }

  const getUser = () => {
    AsyncStorage.getItem("User").then((user) => {
      setUser(JSON.parse(user))
    })
  }

  useEffect(() => {
    getUser()
  }, [])


  return (
    <View style={styles.container}>
      <View style={styles.headerMain}>
        <View style={styles.headerView}>
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <AntDesign name="arrowleft" size={24} color="#008080" />
          </Pressable>
          <Text style={styles.header}>
            Basic Info
          </Text>
        </View>

      </View>
      <View style={styles.info}>
        <View style={styles.name}>
          <Text style={styles.text}>
            Name:
          </Text>
          <Text style={styles.text}>
            {user && user.name}
          </Text>
        </View>
        <View style={styles.name}>
          <Text style={styles.text}>
            Email:
          </Text>
          <Text style={styles.text}>
            {user && user.email}
          </Text>
        </View>
        <View style={styles.logo}>
          <Text style={styles.text}>
            Logo:
          </Text>
          <Image src={user?.photo.path} style={styles.image}/>
        </View>
      </View>

      <View style={styles.apply}>
        <Pressable style={styles.applyButton} onPress={() => Linking.openURL("https://docs.google.com/forms/d/e/1FAIpQLSfHCmxvCDD7e4DIgn-8cENYDN90kZKrZJhNqfiYK94WwHVktg/viewform?usp=sf_link")}>
          <Text style={styles.applyText}>
            APPLY TO SELL ON WAX
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    flexDirection: "column",
  },

  image: {
    width: 50,
    height: 50,
  },

  container: {
    backgroundColor: "#1f2029",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 100,
  },

  headerMain: {
    flex: 1,
    justifyContent: "flex-start",
    width: '100%',
    padding: 25,
  },

  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: "space-around",
    width: "63%"
  },

  header: {
    color: "#008080",
    fontWeight: "900",
    fontSize: 20
  },

  info: {
    flex: 3,
    width: '75%'
  },

  name: {
    marginBottom: 50
  },

  apply: {
    flex: 1,
  },

  text: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 10
  },

  applyText: {
    fontWeight: "bold",
  },

  applyButton: {
    backgroundColor: "#008080",
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  }
});

export default BasicInfo;
