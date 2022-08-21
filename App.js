import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./app/Screen/Welcome/Welcome";
import MovieDetails from "./app/Screen/MovieDetails/MovieDetails";
import Account from "./app/Screen/Account/Account";
import Login from "./app/Screen/Login/Login";
import Signup from "./app/Screen/Signup/Signup";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MovieDetails"
            component={MovieDetails}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Account"
            component={Account}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
};

export default App;
