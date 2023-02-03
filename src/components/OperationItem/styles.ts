import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';

export const Container = styled.TouchableOpacity`
  width: 75px;
  align-items: center;
  justify-content: flex-start;
  margin-right: 15px;
`;

export const IconArea = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.purple};
`;

export const Icon = styled(Ionicons)`
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
`;

export const Description = styled.Text`
  font-size: 12px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.grayPrimary};
  text-align: center;
  margin-top: 7px;
`;
