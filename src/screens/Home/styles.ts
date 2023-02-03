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

export const OperationsArea = styled.ScrollView`
  margin: 15px 0;
`;
