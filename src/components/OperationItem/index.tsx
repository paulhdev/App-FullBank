import { useNavigation } from '@react-navigation/native';
import {
  Container,
  IconArea,
  Icon,
  Description
} from './styles';

import { StackAppProps } from '../../routes/app.routes';

type OperationItemProps = {
  icon: 'caret-up-circle-outline' | 'caret-down-circle-outline' | 'phone-portrait-outline' | 'barcode-outline' | 'person-add-outline';
  description: string;
  route: string;
};

export default function OperationItem({ icon, description, route }: OperationItemProps) {

  const navigation = useNavigation<StackAppProps>();

  const handleScreenNavigation = (routeName: string) => {
    switch (routeName) {
      case 'Transfer':
        return navigation.navigate('TransferDeposit', { type: 'transfer' });
      case 'Deposit':
        return navigation.navigate('TransferDeposit', { type: 'deposit' });
      case 'Payment':
        return navigation.navigate('NewPayment');
      default:
        return;
    };
  };

  return (
    <Container onPress={() => handleScreenNavigation(route)}>
      <IconArea>
        <Icon name={icon} />
      </IconArea>
      <Description>{description}</Description>
    </Container>
  );
};
