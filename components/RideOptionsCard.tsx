import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "@/slices/navSlice";

const RideOptionsCard = () => {
  const data = [
    {
      id: "1",
      title: "UberX",
      multiplier: 1,
      image: require("../assets/images/uberX.png"),
    },
    {
      id: "2",
      title: "UberXL",
      multiplier: 1.2,
      image: require("../assets/images/uberXl.png"),
    },
    {
      id: "3",
      title: "Uber LUX",
      multiplier: 1.75,
      image: require("../assets/images/uberLux.png"),
    },
  ];

  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  const SURGE_CHARGE_RATE = 1.5;
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View>
        <TouchableOpacity
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
          onPress={() => navigation.navigate("NavigationCard")}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Select a Ride ${travelTimeInformation?.distance.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            style={tw`px-10 flex-row justify-between items-center ${
              id === selectedItem?.id ? "bg-gray-200" : ""
            }`}
            onPress={() => setSelectedItem(item)}
          >
            <Image
              source={image}
              style={{ width: 100, height: 100, resizeMode: "contain" }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold `}>{title}</Text>
              <Text>${travelTimeInformation?.duration.text} Travel Time</Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat("en-gb", {
                style: "currency",
                currency: "GBP",
                minimumFractionDigits: 2,
              }).format(
                travelTimeInformation?.duration.value *
                  SURGE_CHARGE_RATE *
                  multiplier
              )}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={tw`mt-auto border-t border-gray-200 `}>
        <TouchableOpacity
          style={tw`bg-black py-3 m-3 ${!selectedItem && "bg-gray-300"}`}
          disabled={!selectedItem}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selectedItem?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
