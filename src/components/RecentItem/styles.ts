import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.graySecondary};
  border-radius: 7px;
  padding: 7px;
  margin: 5px 0;
`;

export const LeftArea = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconArea = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.purple};
`;

export const Icon = styled(Ionicons)`
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
`;

export const InfoArea = styled.View`
  margin-left: 10px;
`;

export const Description = styled.Text`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.white};
`;

export const Date = styled.Text`
  font-size: 12px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.grayPrimary};
`;

export const Value = styled.Text`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.white};
`;
