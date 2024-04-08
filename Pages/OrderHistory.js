import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, Button, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Navbar from "../Components/Navbar";
import axios from '../utils/axiosConfig'
import { Table } from 'antd'
import { formatDate } from '../utils/formatDate'
const OrderHistory = ({ navigation }) => {
    const [orderHistory, setOrderHistory] = useState([])
    const [user, setUser] = useState(AsyncStorage.getItem("User"))

    const getUser = () => {
        AsyncStorage.getItem("User").then((user) => {
            setUser(JSON.parse(user))
            const newUser = JSON.parse(user)
            axios.get(`http://192.168.0.88:3001/order/${newUser._id}`)
                .then((history) => {
                    setOrderHistory(history.data)
                })

        })
    }

    useEffect(() => {
        getUser()
    }, [])

    // const fetchHistory = async () => {
    //     console.log(user._id)
    //     const history = await axios.get(`http://192.168.0.88:3001/order/${user._id}`)
    //     console.log(history)
    //     setOrderHistory(history.data)
    // }

    // useEffect(() => {
    //     fetchHistory()
    // }, [])

    const columns = [
        {
            title: "Item",
            dataIndex: "item",
            key: "item",
            render: (text) => <a>{text}</a>
        },
        {
            title: "Price",
            dataIndex: "price",
            key: 'price'
        },
        {
            title: "Date",
            dataIndex: "date",
            key: 'date'
        }
    ]

    const data = []

    for (let i = 0; i < orderHistory.length; i++) {
        data.push({
            item: orderHistory[i].order.item,
            price: orderHistory[i].order.price,
            date: formatDate(orderHistory[i].created)
        })
    }


    return (
        <View style={styles.orderHistory}>
            <View>
                <Text style={styles.orderHistoryHeader}>Order History</Text>
            </View>
            {orderHistory?.length === 0 ?
                <View style={styles.noOrders}>
                    <Text>No orders to display</Text>
                    <Text>You don't seem to have any orders</Text>
                </View>
                :
                <View>
                    <View style={styles.itemData}>
                        <Text style={styles.headerText}>Item</Text>
                        <Text style={styles.headerText}>Date</Text>
                        <Text style={styles.headerText}>Price</Text>
                    </View>
                    {orderHistory && orderHistory.map((order, index) => {
                        return (
                            <View key={order._id} style={styles.itemData}>
                                <Text style={styles.text}>{order.order.item}</Text>
                                <Text style={styles.text}>{formatDate(order.created)}</Text>
                                <Text style={styles.text}>${order.order.price}</Text>
                            </View>
                        )
                    })}
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    orderHistory: {
        flex: 1,
        paddingTop: 100,
        backgroundColor: "#1f2029",
        alignItems: 'center',
    },

    itemData: {
        width: "75%",
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: "space-around"
    },

    text: {
        color: 'white'
    },

    headerText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },

    orderHistoryHeader: {
        color: "#008080",
        fontWeight: "900",
        fontSize: 20, 
        marginBottom: 50,
    },

    noOrders: {

    }

});

export default OrderHistory;