import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';

export const Container = styled.View`
  background: transparent;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 17% 5% 5% 5%;
`;

export const UserInfoArea = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const InfoArea = styled.View`
  margin-left: 10px;
`;

export const BalanceValue = styled.Text`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: -10px;
`;

export const Username = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.grayPrimary};
`;

export const ButtonMenu = styled.TouchableOpacity`
  background: ${(props) => props.theme.colors.graySecondary};
  border-radius: 7px;
  padding: 7px;
`;

export const Icon = styled(Ionicons)`
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
`;
