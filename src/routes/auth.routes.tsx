import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

import SignIn from '../screens/SignIn';

type StackAuthNavigationProps = {
  SignIn: undefined;
  // SignUp: undefined;
};

export type StackAuthProps = NativeStackNavigationProp<StackAuthNavigationProps>;

const Stack = createNativeStackNavigator<StackAuthNavigationProps>();

export default function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='SignIn' component={SignIn} />
    </Stack.Navigator>
  );
};
