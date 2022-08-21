import { View, Text, ScrollView  } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";
import Loader from "../Loader/Loader";

const Row = ({ title, fetchUrl }) => {
  // Handle State
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetching data
  useEffect(() => {
    const getMovies = async () => {
      setLoading(true)
      const { data } = await axios.get(fetchUrl);
      setMovies(data?.results);
      setLoading(false)
    };
    getMovies();
  }, []);

  return (
    <>
      <View className="flex-row justify-between items-center">
        <Text className="text-white font-semibold text-lg">{title}</Text>
        <Text className="text-blue-600 text-sm font-semibold">View All</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
        horizontal
      >
        { loading && <Loader />}
        {movies && movies.map((item, id) => <MovieCard key={id} item={item} />)}
      </ScrollView>
    </>
  );
};

export default Row;
