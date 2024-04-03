import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, Button, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios'
const Shop = ({ navigation }) => {



    return (
        <View style={styles.shop}>
            <Text>Shop</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    shop: {
        flex: 1,
        paddingTop: 100,
        backgroundColor: "#1f2029"
    }
});

export default Shop;