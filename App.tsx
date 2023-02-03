import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from './src/global/theme';
import Routes from './src/routes';

export default function App() {

  const [loadedFonts] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!loadedFonts) return null;

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar backgroundColor='transparent' barStyle='light-content' translucent />
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
}
