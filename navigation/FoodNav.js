import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import ProDuct from "../screens/ProDuct";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator >
      <Stack.Screen  name="Home" component={HomeScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ProDuct" component={ProDuct} />
    </Stack.Navigator>
  );
}
const MainNavigator = () => { 
    return(
        <NavigationContainer>
            <StackNavigator>

            </StackNavigator>
        </NavigationContainer>
    )
}
export default MainNavigator;