import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, Button, Image, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Navbar from "../Components/Navbar";
import axios from 'axios'
const Home = ({ navigation }) => {
    const [users, setUsers] = useState()

    const getUsers = async () => {
        try {
            const userList = await axios.get("http://192.168.0.88:3001/user")
            setUsers(userList.data.filter((user) => {
                return user.liveID !== null
            }))
        } catch (error) {
            console.log(error)
        }
    }

    const handleLivePress = (user) => {
        AsyncStorage.setItem("LiveID", user.liveID)
        navigation.navigate("livestream")
    }

    useEffect(() => {
        getUsers()
    }, [])


    return (
        <View style={styles.home}>
            <Pressable onPress={() => console.log("Live Now pressed")}>
                <View style={styles.liveHeader}>
                    <Text style={styles.text}>Live Now</Text>
                    <Text style={styles.separatorLine}></Text>
                </View>
            </Pressable>
            <View style={styles.liveSection}>
            {users && users?.length > 0 ?
                <FlatList
                    data={users}
                    renderItem={(user) => {
                        return (
                            <View style={styles.sellerList}>
                                <Image style={styles.imageContainer} resizeMode={"cover"} source={{ uri: user.item.photo.path }} />
                            </View>
                        )

                    }}
                />
                :
                <View style={styles.loader}>
                    <Text style={styles.text}>There are currently no live sellers...</Text>
                </View>
            }
            </View>
            <Pressable onPress={() => console.log("Upcoming pressed")}>
                <View style={styles.upcomingHeader}>
                    <Text style={styles.text}>Upcoming</Text>
                    <Text style={styles.separatorLine}></Text>
                </View>
            </Pressable>
            <View style={styles.upcomingSection}>
                <Text style={styles.text}>
                    There are currently no upcoming sessions...
                </Text>
            </View>
            <Navbar />
        </View>
    );
};

const styles = StyleSheet.create({
    images: {
        flex: 1,
        backgroundColor: 'red',
        height: 50
    },

    home: {
        backgroundColor: "#1f2029",
        flex: 1,
        padding: 25,
        paddingTop: 100,
    },
    text: {
        color: "#008080",
    },
    liveHeader: {
        flexDirection: "row",
        alignItems: "center",
    },
    liveSection: {
        flex: 1,
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: "center",
    },
    upcomingHeader: {
        flexDirection: "row",
        alignItems: "center",
    },
    upcomingSection: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    separatorLine: {
        flex: 1,
        height: 1,
        marginLeft: 5,
        marginRight: 5,
        borderColor: "#008080",
        borderWidth: 1,
    },

    imageContainer: {
        height: 150,
        width: 150,

    },

    sellerList: {
        flex: 1,
        width: "100%",
        alignItems: 'center'
    }
});

export default Home;
