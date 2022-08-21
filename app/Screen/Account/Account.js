import { View, Text, Image, TouchableOpacity } from "react-native";
import { CameraIcon } from "react-native-heroicons/solid";

const Account = () => {
  return (
    <View className="bg-[#ecf0fc] flex-1 justify-center items-center">
      <View className="shadow-md justify-center items-center rounded-md bg-white p-4">
        <Text className="mb-4 font-semibold text-xl">Account Information</Text>
        <View className="relative border-4 border-indigo-400 rounded-full p-1">
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/43.jpg" }}
            className="w-24 h-24 rounded-full"
          />
          <TouchableOpacity className="absolute top-0 right-0 bg-indigo-500 w-8 h-8 rounded-full justify-center items-center">
            <CameraIcon color="white" size={20} />
          </TouchableOpacity>
        </View>
        <View>
          <Text className="mt-4 font-semibold text-lg text-center">
            John Doe
          </Text>
          <Text className="text-gray-500">Web Developer</Text>
        </View>
        <View className="flex-row gap-4 items-center mt-3 px-4">
          <TouchableOpacity className="border-2 border-gray-300 p-2 rounded-md justify-center items-center w-28">
            <Text className="text-gray-900 font-semibold">😊</Text>
            <Text className="text-gray-900 font-semibold">Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity className="border-2 border-gray-300 p-2 rounded-md justify-center items-center w-28">
            <Text className="text-gray-900 font-semibold">🖊️</Text>
            <Text className="text-gray-900 font-semibold">Set a status</Text>
          </TouchableOpacity>
          <TouchableOpacity className="border-2 border-gray-300 p-2 rounded-md justify-center items-center w-28">
            <Text className="text-gray-900 font-semibold">💁</Text>
            <Text className="text-gray-900 font-semibold">More..</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Account;
