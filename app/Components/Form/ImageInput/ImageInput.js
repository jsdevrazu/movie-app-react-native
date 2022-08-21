import React, { useEffect } from "react";
import { Image, View, TouchableWithoutFeedback, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { CameraIcon } from "react-native-heroicons/outline";

function ImageInput({ imageUri, onChangeImage }) {
  const requestPermissions = async () => {
    const { status } = ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === "denied") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
        allowsEditing: true,
        aspect: [4, 3],
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error Reading an image", error);
    }
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "yes", onPress: () => onChangeImage(null) },
        { text: "no" },
      ]);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View className="bg-[#F9F9F9] rounded-md justify-center items-center h-[100px] w-[100px] overflow-hidden">
        {!imageUri ? (
          <CameraIcon
            color="#F3F3F3"
            size={35}
          />
        ) : (
          <Image className="w-full h-full" source={{ uri: imageUri }} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ImageInput;