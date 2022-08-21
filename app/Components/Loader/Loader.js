import { ActivityIndicator, View } from "react-native";

const Loader = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
};

export default Loader;
