import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.background};
  padding: 17% 5% 5% 5%; ;
`;

export const TitleArea = styled.View`
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

export const RecentsArea = styled.FlatList`
  margin: 30px 0;
`;
