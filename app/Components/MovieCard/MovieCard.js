import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";

const MovieCard = ({ item }) => {
  return (
    <TouchableOpacity className="w-48 mr-4">
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`,
        }}
        className="w-full h-20 rounded-md"
      />
      <Text className="text-white text-lg mt-4 font-semibold">
        {item?.original_title?.substring(0, 15)}...
      </Text>
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center gap-2 mt-2">
          <StarIcon color="orangered" />
          <Text className="text-white items-center">{item?.vote_average}</Text>
        </View>
        <Text className="text-white mt-2">{item?.release_date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
