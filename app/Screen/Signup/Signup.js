import { View, Text } from "react-native";
import React from "react";
import AppForm from "../../Components/Form/AppForm/AppForm";
import AppFormFeilds from "../../Components/Form/AppFormFeilds/AppFormFeilds";
import AppSubmitButton from "../../Components/Form/AppSubmitButton/AppSubmitButton";
import { useNavigation } from "@react-navigation/native";
import { RegisterSchema } from "../../Validation";

const Signup = () => {
  const navigation = useNavigation();

  const signUp = async (values) => {
    console.log(values);
  };

  return (
    <View className={`bg-gray-900 flex-1 justify-center items-center`}>
      <View className="shadow-md bg-white w-full p-8 rounded-md">
        <Text className="text-1xl font-bold text-center">
          Welcome to register page
        </Text>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={RegisterSchema}
          onSubmit={(values) => signUp(values)}
        >
          <AppFormFeilds name="name" placeholder="Full Name" />
          <AppFormFeilds
            name="email"
            placeholder="Email"
            keyboardType="email-address"
          />
          <AppFormFeilds
            name="password"
            placeholder="Password"
            autoCompleteType="off"
            password={true}
          />
          <AppSubmitButton title="Signup Now" />
        </AppForm>
        <Text className="mt-4 text-gray-700">
          If you already have an account?
          <Text
            className="text-blue-600"
            onPress={() => navigation.navigate("Login")}
          >
            login
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Signup;
