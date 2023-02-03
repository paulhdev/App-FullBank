import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import CurrencyInput from 'react-native-currency-input';

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

export const SquareBalanceArea = styled.View`
  width: 100%;
  border-radius: 15px;
  padding: 25px;
  margin: 30px 0;
  background: ${(props) => props.theme.colors.purple};
  position: relative;
  overflow: hidden;
`;

export const SquareOne = styled.View`
  position: absolute;
  bottom: -5%;
  right: 15%;
  width: 85px;
  height: 85px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.white};
  opacity: 0.3;
`;

export const SquareTwo = styled.View`
  position: absolute;
  top: -30%;
  right: -2%;
  width: 85px;
  height: 85px;
  border-radius: 20px;
  background: ${(props) => props.theme.colors.white};
  opacity: 0.3;
`;

export const BalanceText = styled.Text`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.grayPrimary};
`;

export const BalanceValue = styled.Text`
  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.white};
`;

export const Input = styled(CurrencyInput)`
  min-width: 250px;
  width: 100%;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-size: 50px;
  border-radius: 15px;
  margin: 10px 0;
`;

export const InputTextInfo = styled.Text`
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.grayPrimary};
`;

export const ButtonSend = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
  border-radius: 7px;
  background: ${(props) => props.theme.colors.purple};
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 5%;
`;

export const ButtonSendText = styled.Text`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.medium};
  color: ${(props) => props.theme.colors.white};
`;
