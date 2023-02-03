import {
  Container,
  TitleText,
  TitleLine
} from './styles';

type TitleProps = {
  text: string;
};

export default function Title({ text }: TitleProps) {
  return (
    <Container>
      <TitleText>{text}</TitleText>
      <TitleLine />
    </Container>
  );
};
