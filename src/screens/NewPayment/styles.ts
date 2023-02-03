import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BarCodeScanner } from 'expo-barcode-scanner';

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.background};
  padding: 17% 5% 5% 5%;
  align-items: center;
`;

export const TitleArea = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  background: ${(props) => props.theme.colors.graySecondary};
  border-radius: 7px;
  padding: 7px;
`;

export const Icon = styled(Ionicons)`
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
`;

export const BarCodeScannerArea = styled(BarCodeScanner)`
  width: 100%;
  height: 450px;
  border-width: 1px;
  margin: 30px 0;
`;

export const ButtonBarCodeNumber = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
  border-radius: 7px;
  background: ${(props) => props.theme.colors.purple};
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 5%;
`;

export const ButtonBarCodeNumberText = styled.Text`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.medium};
  color: ${(props) => props.theme.colors.white};
`;
