import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from '../screens/Home';
import AllRecents from "../screens/AllRecents";
import Receipt from '../screens/Receipt';

type StackAppNavigationProps = {
  Drawer: undefined;
  Home: undefined;
  AllRecents: undefined;
  Receipt: undefined;
};

export type StackAppProps = NativeStackNavigationProp<StackAppNavigationProps>;

const Stack = createNativeStackNavigator<StackAppNavigationProps>();
const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: '#6A22F1',
        drawerActiveTintColor: '#6A22F1',
        drawerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerShown: false,
      }}
    >
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='AllRecents' component={AllRecents} />
    </Drawer.Navigator>
  );
};

export default function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='Drawer' component={DrawerNavigator} />
      <Stack.Screen name='AllRecents' component={AllRecents} />
      <Stack.Screen name='Receipt' component={Receipt} />
    </Stack.Navigator>
  );
};
