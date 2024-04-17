import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, Button, Image, FlatList, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Navbar from "../Components/Navbar";
import axios from 'axios'
const Shop = ({ navigation }) => {
    const [sellers, setSellers] = useState()

    const getSellerList = async () => {
        const sellerList = await axios.get('http://192.168.0.88:3001/user')
        setSellers(sellerList.data.filter((user) => {
            return user.role !== "user"
        }))
    }

    useEffect(() => {
        getSellerList()
    }, [])

    return (
        <View style={styles.shop}>
            {sellers && sellers?.length > 0 ?
                <FlatList
                    data={sellers}
                    renderItem={(seller) => {
                        return (
                            <View style={styles.sellerList}>
                                <Image style={styles.imageContainer} resizeMode={"cover"} source={{ uri: seller.item.photo.path }} />
                            </View>
                        )

                    }}
                />
                :
                <View style={styles.loader}>
                    <ActivityIndicator size="large" />
                </View>
            }
            <Navbar />
        </View>
    );
};

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: "row",
        marginBottom: '25%'
    },

    shop: {
        flex: 1,
        paddingTop: 100,
        backgroundColor: "#1f2029",
    },

    seller: {
        flex: 1,
        height: 250,
        width: '100%',
    },

    imageContainer: {
        height: 200,
        width: "80%",

    },

    sellerList: {
        flex: 1,
        width: "100%",
        alignItems: 'center'
    }
});

export default Shop;