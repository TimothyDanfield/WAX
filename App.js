import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import BasicInfo from "./Pages/BasicInfo";
import Shop from "./Pages/Shop";
import Signin from "./Pages/Signin";
import Signup from './Pages/Signup'
import OrderHistory from "./Pages/OrderHistory";
import LiveStream from './Pages/LiveStream/LiveStream'
import { register } from "@videosdk.live/react-native-sdk";


export default function App() {
  const [userToken, setUserToken] = useState(null)
  const Stack = createNativeStackNavigator();

  register();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <>
          {/* {userToken == null ?
            (
              <>
                <Stack.Screen name="Signin" options={{ title: "Signin" }}>
                  {(props) => <Signin {...props} setUserToken={setUserToken} />}
                </Stack.Screen>
                <Stack.Screen
                  name="Signup"
                  component={Signup}
                  options={{ title: "Signup" }}
                />
              </>
            )
            :
            (
              <> */}
          <Stack.Screen 
            name="Live"
            component={LiveStream}
            options={{ title: "Live" }}
          />
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
            {(props) => <Profile {...props} setUserToken={setUserToken} />}
          </Stack.Screen>

          <Stack.Screen
            name="BasicInfo"
            component={BasicInfo}
            options={{ title: "BasicInfo" }}
          />
          <Stack.Screen
            name="OrderHistory"
            component={OrderHistory}
            options={{ title: "OrderHistory" }}
          />
          {/* </>
            )} */}
        </>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
