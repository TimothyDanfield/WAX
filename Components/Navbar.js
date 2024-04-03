import React, { useState } from 'react'
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
    const [selected, setSelected] = useState("home")

    const navigation = useNavigation()

    
    return (
        <View style={styles.navbar}>
            <Pressable onPress={() => {
                setSelected("shop")
                navigation.navigate("Shop")
            }}
            style={[styles.pressable1, {backgroundColor: selected === "shop" ? "#1f2029" : "white"}]}
            >
                <Text style={{color: selected === "shop" ? "white" : "#1f2029"}}>
                    Shop
                </Text>
            </Pressable>
            <Pressable onPress={() => {
                setSelected("home")
                navigation.navigate("Home")
            }}
            style={[styles.pressable2, {backgroundColor: selected === "home" ? "#1f2029" : "white"}]}
            >
                <Text style={{color: selected === "home" ? "white" : "#1f2029"}}>
                    Home
                </Text>
            </Pressable>
            <Pressable onPress={() => {
                setSelected("profile")
                navigation.navigate("Profile")
            }}
            style={[styles.pressable3, {backgroundColor: selected === "profile" ? "#1f2029" : "white"}]}
            >
                <Text style={{color: selected === "profile" ? "white" : "#1f2029"}}>
                    Profile
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        position: "absolute",
        bottom: 50,
        left: "25%",
        backgroundColor: 'white',
        height: 75,
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 50,
    },

    pressable1: {
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
    },

    pressable2: {
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },

    pressable3: {
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
    }
})

export default Navbar