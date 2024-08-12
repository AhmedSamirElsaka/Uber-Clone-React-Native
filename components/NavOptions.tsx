import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
const data = [
  {
    id: 1,
    title: "Get A Ride",
    image: require("../assets/images/getARide.png"),
    screen: "MapScreen",
  },
  {
    id: 2,
    title: "Order food",
    image: require("../assets/images/eats.png"),
    screen: "EatsScreen",
  },
];
const NavOptions = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`p-2 pl-6 pb-8 pt-4  m-2 w-40`}
          onPress={() => navigation.navigate(item.screen)}
        >
          <Image
            source={item.image}
            style={{ width: 120, height: 120, resizeMode: "contain" }}
          />
          <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          <Icon
            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
            name="arrowright"
            type="antdesign"
            color="white"
          />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
