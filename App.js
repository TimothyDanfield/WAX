import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import BasicInfo from "./Pages/BasicInfo";
import Navbar from "./Components/Navbar";
import Shop from "./Pages/Shop";
import Signin from "./Pages/Signin";
import Signup from './Pages/Signup'

export default function App() {
  const [userToken, setUserToken] = useState(null)
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <>
          {userToken == null ?
            (
              <Stack.Screen name="Signin" options={{ title: "Signin" }}>
                {(props) => <Signin {...props} setUserToken={setUserToken} />}
              </Stack.Screen>
              <Stack.Screen 
                name="Sigup" 
                compoenet={Signup}
                options={{ title: "Signup" }}
              />

            )
            :
            (
              <> */}
                <Stack.Screen
                  name="Home"
                  component={Home}
                  options={{ title: "Home" }}
                />
                <Stack.Screen
                  name="Shop"
                  component={Shop}
                  options={false}
                />
                <Stack.Screen name="Profile" options={{ title: "Profile" }}>
                  {(props) => <Profile {...props} setUserToken={setUserToken}/>}
                </Stack.Screen>

                <Stack.Screen
                  name="BasicInfo"
                  component={BasicInfo}
                  options={{ title: "BasicInfo" }}
                />
              {/* </>
            )}
        </> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}
