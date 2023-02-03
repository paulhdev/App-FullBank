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

  return (
    <Container>
      <IconArea>
        <Icon name={icon} />
      </IconArea>
      <Description>{description}</Description>
    </Container>
  );
};
