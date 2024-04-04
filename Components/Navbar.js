import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';

const Navbar = () => {
    const [selected, setSelected] = useState("Home")

    const navigation = useNavigation()
    const route = useRoute()

    useEffect(() => {
        setSelected(route.name)
    }, [route.name])

    
    return (
        <View style={styles.navbar}>
            <Pressable onPress={() => {
                setSelected("shop")
                navigation.navigate("Shop")
            }}
            style={[styles.pressable1, {backgroundColor: selected === "Shop" ? "#008080" : "white"}]}
            >
                <Text>
                    Shop
                </Text>
            </Pressable>
            <Pressable onPress={() => {
                setSelected("home")
                navigation.navigate("Home")
            }}
            style={[styles.pressable2, {backgroundColor: selected === "Home" ? "#008080" : "white"}]}
            >
                <Text>
                    Home
                </Text>
            </Pressable>
            <Pressable onPress={() => {
                setSelected("profile")
                navigation.navigate("Profile")
            }}
            style={[styles.pressable3, {backgroundColor: selected === "Profile" ? "#008080" : "white"}]}
            >
                <Text>
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
        left: "30%",
        backgroundColor: 'white',
        height: 50,
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