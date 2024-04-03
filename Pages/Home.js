import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, Button, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
                {users?.length > 0 ?
                    <View>
                    {users && users.map((user) =>  {
                        <Pressable onPress={() => handleLivePress(user)}>
                            <Image source={user.path}/>
                        </Pressable>
                    })}
                    </View>
                    :
                    <Text style={styles.text}>There are currently no live sessions...</Text>
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
        </View>
    );
};

const styles = StyleSheet.create({
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
        alignItems: "center",
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
});

export default Home;
