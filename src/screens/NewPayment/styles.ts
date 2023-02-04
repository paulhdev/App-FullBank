import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';

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

export const BarCodeInfoText = styled.Text`
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.grayPrimary};
  align-self: flex-start;
  margin-top: 30px;
`;

export const BarCodeInfoNumber = styled.Text`
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.medium};
  color: ${(props) => props.theme.colors.white};
  align-self: flex-start;
`;

export const ValueInfoText = styled.Text`
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.grayPrimary};
  align-self: flex-start;
  margin-top: 30px;
`;

export const ValuePayment = styled.Text`
  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.white};
  align-self: flex-start;
`;

export const ButtonPayment = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
  border-radius: 7px;
  background: ${(props) => props.theme.colors.purple};
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 5%;
`;

export const ButtonPaymentText = styled.Text`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.medium};
  color: ${(props) => props.theme.colors.white};
`;
