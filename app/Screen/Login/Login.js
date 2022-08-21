import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import AppForm from "../../Components/Form/AppForm/AppForm";
import AppFormFeilds from "../../Components/Form/AppFormFeilds/AppFormFeilds";
import AppSubmitButton from "../../Components/Form/AppSubmitButton/AppSubmitButton";
import { LoginSchema } from "../../Validation";

const Login = () => {
  const navigation = useNavigation();

  const loginUser = async (values) => {
    console.log(values);
  };

  return (
    <View className={`bg-gray-900 flex-1 justify-center items-center`}>
      <View className="shadow-md bg-white w-full p-8 rounded-md">
        <Text className="text-1xl font-bold text-center">
          Welcome to login page
        </Text>
        <AppForm
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => loginUser(values)}
        >
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
          <AppSubmitButton title="Login Now" />
        </AppForm>
        <Text className="mt-4 text-gray-700">
          If you don't have account?
          <Text
            className="text-blue-600"
            onPress={() => navigation.navigate("Signup")}
          >
            signup
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
