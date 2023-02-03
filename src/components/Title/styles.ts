import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.grayPrimary};
  font-size: 20px;
`;

export const TitleLine = styled.View`
  width: 15%;
  height: 3px;
  border-radius: 2px;
  background: ${(props) => props.theme.colors.white};
  margin-left: 10px;
`;
