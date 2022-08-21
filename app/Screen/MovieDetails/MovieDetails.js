import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import React, { useState } from "react";
import { COLOR } from "../../constants/color";
import { ArrowLeftIcon, PlayIcon } from "react-native-heroicons/solid";
import { useNavigation, useRoute } from "@react-navigation/native";
import YouTubePlayer from "react-native-youtube-iframe";
import AppButton from "../../Components/AppButton/AppButton";

const MovieDetails = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  const [playing, setPlaying] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 100,
        backgroundColor: COLOR.PRIMARYCOLOR,
      }}
    >
      {/* Image */}
      <View className="relative">
        <Image
          source={{
            uri: params?.large_cover_image,
          }}
          className="w-full h-80 object-cover bg-gray-300 p-4"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-14 left-5 p-2 bg-gray-900 rounded-full"
        >
          <ArrowLeftIcon size={20} color="white" />
        </TouchableOpacity>
      </View>
      {/* Movie Details */}
      <View className="pt-12">
        <View className="px-4">
          <Text className="text-2xl text-white font-bold mb-2">
            {params?.title}
          </Text>
          <View className="rounded-md max-w-[160px] bg-indigo-500 px-4 py-2">
            <Text className="text-white">Release Year: {params?.year}</Text>
          </View>
          <View className="flex-row items-center gap-2 mt-4">
            <View className="border-2 border-gray-200 p-1 text-sm">
              <Text className="text-white">PG</Text>
            </View>
            <Text className="text-lg text-white font-semibold mt-4">
              . {params?.genres?.map((params) => params + " | ")}
            </Text>
          </View>
          <Text className="text-md text-white font-semibold rounded-l mt-1">
            Movie Runtime: {params?.runtime} min
          </Text>
          <View className="mt-4">
            <Text className="text-xl text-white font-bold">Overview:</Text>
            <Text className="text-gray-300 font-semibold mt-3 leading-6">
              {params?.description_full}
            </Text>
          </View>
        </View>
        {/* Watch Trailer */}
        <View className="mt-4 px-4">
          <Text className="text-xl text-white font-bold">Watch Trailer:</Text>
          <View className="relative mt-4">
            <Image
              source={{ uri: params?.large_cover_image }}
              className="h-32 w-32"
            />
            <TouchableOpacity
              className="absolute top-12 left-12"
              onPress={() => setPlaying(!playing)}
            >
              <PlayIcon size={30} color="white" />
            </TouchableOpacity>
          </View>
          {playing && (
            <View className="mt-4">
              <YouTubePlayer
                height={300}
                play={true}
                videoId={params?.yt_trailer_code}
              />
            </View>
          )}
        </View>
        {/* Download Movie */}
        <View className="flex-row items-center gap-4">
          {params &&
            params?.torrents?.map((item) => (
              <View key={item?.quality}>
                <AppButton
                  title={`Download ${item?.quality}`}
                  onPress={() => Linking.openURL(item?.url)}
                />
                <Text className="text-white mt-2 px-2">
                  File Size: {item?.size}
                </Text>
              </View>
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieDetails;
