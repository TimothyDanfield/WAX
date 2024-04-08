import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, Button, Image, FlatList } from "react-native";
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
                                <Image style={styles.imageContainer} resizeMode={"cover"} source={{uri: seller.item.photo.path}} />
                            </View>
                        )

                    }}
                />
                :
                <Text style={styles.text}>There are currently no live sessions...</Text>
            }
            <Navbar />
        </View>
    );
};

const styles = StyleSheet.create({
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