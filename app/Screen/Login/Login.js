import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import AppForm from "../../components/Form/AppForm";
import AppFormFeilds from "../../components/Form/AppFormFeilds";
import AppSubmitButton from "../../components/Form/AppSubmitButton";
import { LoginSchema } from "../../Validation";
import SafeAreaWrapper from "../../Components/SafeAreaWrapper/SafeAreaWrapper";
import { COLOR } from "../../constants/color";


const Login = () => {
  const navigation = useNavigation();

  const loginUser = async (values) => {
    console.log(values);
  };

  return (
    <SafeAreaWrapper
      contentContainerStyle={{
        paddingBottom: 100,
        backgroundColor: COLOR.PRIMARYCOLOR,
      }}
    >
      <View className="shadow-md bg-white w-full p-8">
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
            onPress={() => navigation.navigate("Home")}
          >
            signup
          </Text>
        </Text>
      </View>
    </SafeAreaWrapper>
  );
};

export default Login;
