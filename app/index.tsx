import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { Store } from "../store";
import HomeScreen from "@/screens/HomeScreen";

export default function Index() {
  return (
    <Provider store={Store}>
      <View>
        <HomeScreen />
      </View>
    </Provider>
  );
}
