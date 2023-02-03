import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.background};
`;

export const Content = styled.ScrollView`
  width: 100%;
  margin-top: 10px;
  padding: 0 5% 5% 5%;
`;

export const TitleArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.grayPrimary};
`;

export const OperationsArea = styled.ScrollView`
  margin: 15px 0 30px 0;
`;

export const RecentsArea = styled.ScrollView`
  margin: 15px 0;
`;
