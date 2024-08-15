import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Map from "@/components/Map";
import tw from "twrnc";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationCard from "@/components/NavigationCard";
import RideOptionsCard from "@/components/RideOptionsCard";
import { Icon } from "@rneui/base";
import { useNavigation } from "expo-router";

const MapScreen = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Icon name="menu" />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigationCard"
            component={NavigationCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
