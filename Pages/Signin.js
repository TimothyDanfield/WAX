import React, { useState } from "react";
import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
import { StyleSheet, Text, View, Pressable, Button, Image, TextInput, Selection, Option } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Signin = ({ navigation, setUserToken }) => {
    const [user, setUser] = useState();
    const [error, setError] = useState()
    const [recoveryEmail, setRecoveryEmail] = useState();
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });


    const handleRecoveryEmail = (e) => {
        setRecoveryEmail(e.target.value);

    };

    const handleLogin = (e, name) => {
        setLogin({
            ...login,
            [name]: e,
        });
    };

    // Normal login functionality
    const loginUser = async (e) => {
        if (!login.email || !login.password) {
            setError("Please fill out required information")
            return;
        }

        try {
            const newUser = await axios.post("http://192.168.0.88:3001/user/login", {
                email: login.email,
                password: login.password,
            });
            const user = JSON.stringify(newUser.data.user)
            const token = JSON.stringify(newUser.data.token)
            AsyncStorage.setItem("User", user);
            AsyncStorage.setItem("Token", token);
            setUserToken(token)
        } catch (error) {
            setError(error.response.data.error);
        }
    };

    const handleForgotPassword = async () => {

        try {
            const findUser = await axios.get(
                `http://localhost:3001/user/user?email=${recoveryEmail}`
            );
            if (findUser) {
                localStorage.setItem("ForgotPassword", JSON.stringify(recoveryEmail));
                navigate("/forgotpassword");
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.Error)
        }

    };

    return (
        <View style={styles.loginPage}>
            <View style={styles.loginForm}>
                <View style={styles.loginHeader}>
                    <Text style={styles.loginHeaderText}>Log In</Text>
                </View>
                <View style={styles.loginInput}>
                    <TextInput
                        style={styles.textInput}
                        editable
                        placeholder="Email"
                        onChangeText={(e) => handleLogin(e, "email")}
                        value={login.email}
                    />
                    <TextInput
                        style={styles.textInput}
                        editable
                        placeholder="Password"
                        onChangeText={(e) => handleLogin(e, "password")}
                        value={login.password}
                    />
                    {error && <Text style={styles.error}>{error}</Text>}
                </View>
                <View style={styles.loginButton}>
                    <Pressable onPress={loginUser}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </Pressable>
                </View>
                {/* <View style={styles.loginSeparator}>
                    <Text></Text>
                    <Text>Or</Text>
                    <Text></Text>
                </View>
                <View style={styles.forgotPassword}>
                    <Pressable>
                        <Text>FORGOT PASSWORD?</Text>
                    </Pressable>
                </View> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    error: {
        textAlign: "center",
        color: "red"
    },

    loginPage: {
        flex: 1,
        paddingTop: 100,
        backgroundColor: "#1f2029",
        justifyContent: "center",
        alignItems: "center"
    },

    loginForm: {
        backgroundColor: "#2b2e38",
        paddingTop: 25,
        paddingBottom: 25,
        height: "50%",
        borderRadius: 5,
        width: '90%',
        alignItems: "center",
        justifyContent: "space-around"
    },

    loginHeader: {
        fontSize: 18
    },

    loginHeaderText: {
        fontSize: 18,
        color: "#027c7d"
    },

    loginInput: {
        height: 175,
        width: "80%"
    },

    textInput: {
        flex: 1,
        backgroundColor: "#1f2029",
        margin: 10,
        paddingLeft: 30,
        borderRadius: 10,
        color: 'white'
    },

    loginButton: {
        backgroundColor: "#008080",
        width: 125,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },

    loginButtonText: {

    },

    loginSeparator: {

    },

    forgotPassword: {

    },
})

export default Signin;