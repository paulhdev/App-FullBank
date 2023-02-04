import styled from 'styled-components/native';

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
