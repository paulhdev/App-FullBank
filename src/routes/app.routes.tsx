import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from '../screens/Home';
import Receipts from '../screens/Receipts';

type StackAppNavigationProps = {
  Drawer: undefined;
  Home: undefined;
  // Receipts: undefined;
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
      <Drawer.Screen name='Receipts' component={Receipts} />
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
    </Stack.Navigator>
  );
};
