import Header from '../../components/Header';
import OperationItem from '../../components/OperationItem';
import Title from '../../components/Title';

import {
  Container,
  Content,
  OperationsArea
} from './styles';

export default function Home() {
  return (
    <Container>
      <Header />
      <Content showsVerticalScrollIndicator={false}>

        <Title text='Operações' />
        <OperationsArea
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <OperationItem icon='barcode-outline' description='Pagar' />
          <OperationItem icon='caret-up-circle-outline' description='Trasferir' />
          <OperationItem icon='caret-down-circle-outline' description='Depositar' />
          <OperationItem icon='phone-portrait-outline' description='Recarga de celular' />
          <OperationItem icon='person-add-outline' description='Adicionar contato' />
        </OperationsArea>

      </Content>
    </Container>
  );
};