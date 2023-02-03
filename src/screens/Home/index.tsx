import { TouchableOpacity } from 'react-native';

import Header from '../../components/Header';
import OperationItem from '../../components/OperationItem';
import RecentItem from '../../components/RecentItem';
import Title from '../../components/Title';

import {
  Container,
  Content,
  TitleArea,
  ButtonText,
  OperationsArea,
  RecentsArea
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
          <OperationItem icon='barcode-outline' description='Pagar' route='BilletPayment' />
          <OperationItem icon='caret-up-circle-outline' description='Trasferir' route='Transfer' />
          <OperationItem icon='caret-down-circle-outline' description='Depositar' route='Deposit' />
          <OperationItem icon='phone-portrait-outline' description='Recarga de celular' route='MobileRecharge' />
          <OperationItem icon='person-add-outline' description='Adicionar contato' route='AddContant' />
        </OperationsArea>

        <TitleArea>
          <Title text='Recentes' />
          <TouchableOpacity>
            <ButtonText>Ver tudo</ButtonText>
          </TouchableOpacity>
        </TitleArea>
        <RecentsArea showsVerticalScrollIndicator={false}>
          <RecentItem type='transfer' value={79} />
          <RecentItem type='transfer' value={21} />
          <RecentItem type='received' value={15.50} />
          <RecentItem type='pay' value={60} />
          <RecentItem type='recharge' value={12} />
        </RecentsArea>

      </Content>
    </Container>
  );
};