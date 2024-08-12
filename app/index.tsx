import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { Store } from "../store";
import HomeScreen from "@/screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MapScreen from "@/screens/MapScreen";

export default function Index() {
  const Stack = createStackNavigator();

  return (
    <Provider store={Store}>
      <NavigationContainer independent={true}>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
