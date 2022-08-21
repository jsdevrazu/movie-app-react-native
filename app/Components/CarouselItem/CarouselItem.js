import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CarouselItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("MovieDetails", item)}>
      <View className="mt-4 mr-4 relative">
        <Image
          source={{
            uri: item?.large_cover_image,
          }}
          className="flex-1 justify-center w-96 h-72 object-cover rounded-lg bg-gray-800"
        />

        <View className="absolute px-10 bottom-10">
          <Text className="text-2xl text-white font-bold mb-2">
            {item?.title}
          </Text>
          <View className="rounded-md max-w-[160px] bg-indigo-500 px-4 py-2">
            <Text className="text-white">Release Year: {item?.year}</Text>
          </View>
          <View className="flex-row items-center gap-2 mt-4">
            <View className="border-2 border-gray-200 p-1 text-sm">
              <Text className="text-white">PG</Text>
            </View>
            <Text className="text-lg text-white font-semibold mt-4">
              . {item?.genres?.map((params) => params + " | ")}
            </Text>
          </View>
          <Text className="text-md text-white font-semibold bg-indigo-600 p-2 rounded-l mt-3">
            Movie Runtime: {item?.runtime} min
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CarouselItem;
