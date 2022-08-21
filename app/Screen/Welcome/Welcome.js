import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import SafeAreaWrapper from "../../Components/SafeAreaWrapper/SafeAreaWrapper";
import {
  ArrowCircleDownIcon,
  CheckCircleIcon,
} from "react-native-heroicons/solid";
import { COLOR } from "../../constants/color";
import axios from "axios";
import { apiEndPoint } from "../../constants/variable";
import CarouselItem from "../../Components/CarouselItem/CarouselItem";
import Row from "../../Components/Row/Row";
import requests from "../../Utils";
import { useNavigation } from "@react-navigation/native";
import Loader from "../../Components/Loader/Loader";

const Welcome = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const getMovieData = async () => {
      const { data } = await axios.get(apiEndPoint);
      setMovies(data?.data?.movies);
      setLoading(false);
    };
    getMovieData();
  }, []);

  return (
    <SafeAreaWrapper bg={COLOR.PRIMARYCOLOR}>
      <View className="px-4 flex-row justify-between items-center">
        <View>
          <Text className="text-white text-2xl font-semibold">
            Now Showing <CheckCircleIcon color="#fff" size={15} />
          </Text>
          <Text className="text-sm font-semibold text-gray-500 flex items-center">
            Movie on cinemas <ArrowCircleDownIcon color="#fff" size={10} />
          </Text>
        </View>
        <TouchableOpacity
          className="flex-row gap-2 items-center"
          onPress={() => navigation.navigate("Account")}
        >
          <Image
            source={{
              uri: "https://cdn.pixabay.com/user/2022/04/16/03-29-22-662_48x48.jpg",
            }}
            className="w-10 h-10 object-cover rounded-full"
          />
        </TouchableOpacity>
      </View>
      {/* Hero */}
      <View className="flex-1 justify-center items-center">
        {movies && (
          <FlatList
            data={movies}
            renderItem={({ item }) => <CarouselItem item={item} />}
            horizontal
            showsHorizontalScrollIndicator
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
          />
        )}
        {loading && <Loader />}
      </View>
      {/* Popular Movie Render */}
      <ScrollView
        className="mt-10 px-4 flex-1"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Row title="All Popular Movie" fetchUrl={requests.requestPopular} />
        <Row title="Horror Movie" fetchUrl={requests.requestHorror} />
        <Row title="Top Rated Movie" fetchUrl={requests.requestTopRated} />
        <Row title="Trending Movie" fetchUrl={requests.requestTrending} />
        <Row title="Upcoming Movie" fetchUrl={requests.requestUpcoming} />
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default Welcome;
