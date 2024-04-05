import React, { useState } from "react";
import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
import { StyleSheet, Text, View, Pressable, Button, Image, TextInput, Selection, Option } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Signup = ({ navigation }) => {
    const [user, setUser] = useState();
    const [error, setError] = useState()

    const [signup, setSignup] = useState({
        name: "",
        securityQuestion: "",
        securityAnswer: "",
        email: "",
        password: "",
    });


    const handleSignup = (e, name) => {
        setSignup({
            ...signup,
            [name]: e,
        });
    };


    // Signup Functionality:

    const signUp = async (e) => {
        if (
            !signup.password ||
            !signup.name ||
            !signup.email ||
            !signup.securityQuestion ||
            !signup.securityAnswer
        ) {
            setError("Please fill out required information");
        } else {
            try {
                const newUser = await axios.post(
                    `http://192.168.0.88:3001/user/register`,
                    {
                        name: signup.name,
                        email: signup.email,
                        password: signup.password,
                        securityQuestion: signup.securityQuestion,
                        securityAnswer: signup.securityAnswer,
                    }
                ).then((user) => {
                    navigation.navigate("Signin")
                })
            } catch (error) {
                setError(error.response.data.error || error.response.data.message)
            }
        }
    };

    return (
        <View style={styles.loginPage}>
            <View style={styles.loginForm}>
                <View style={styles.loginHeader}>
                    <Text style={styles.loginHeaderText}>Sign Up</Text>
                </View>
                <View style={styles.loginInput}>
                    <TextInput
                        style={styles.textInput}
                        editable
                        placeholder="Name"
                        onChangeText={(e) => handleSignup(e, "name")}
                        value={signup.name}
                    />
                    <TextInput
                        style={styles.textInput}
                        editable
                        placeholder="Email"
                        onChangeText={(e) => handleSignup(e, "email")}
                        value={signup.email}
                    />
                    <TextInput
                        style={styles.textInput}
                        editable
                        placeholder="Security Question"
                        onChangeText={(e) => handleSignup(e, "securityQuestion")}
                        value={signup.securityQuestion}
                    />
                    <TextInput
                        style={styles.textInput}
                        editable
                        placeholder="Security Question Answer"
                        onChangeText={(e) => handleSignup(e, "securityAnswer")}
                        value={signup.securityAnswer}
                    />
                    <TextInput
                        style={styles.textInput}
                        editable
                        placeholder="Password"
                        onChangeText={(e) => handleSignup(e, "password")}
                        value={signup.password}
                    />
                    {error && <Text style={styles.error}>{error}</Text>}
                </View>
                <View style={styles.loginButton}>
                    <Pressable onPress={signUp}>
                        <Text style={styles.loginButtonText}>Sign Up</Text>
                    </Pressable>
                </View>
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
        minHeight: "60%",
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
        height: 400,
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
})

export default Signup;