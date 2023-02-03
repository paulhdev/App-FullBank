import { useNavigation } from '@react-navigation/native';
import {
  Container,
  LeftArea,
  InfoArea,
  IconArea,
  Icon,
  Description,
  Date,
  Value
} from './styles';

type RecentItemProps = {
  type: 'pay' | 'transfer' | 'received' | 'recharge';
  // Date: Date;
  value: number;
};

// 'caret-up-circle-outline' | 'caret-down-circle-outline' | 'phone-portrait-outline' | 'barcode-outline' | 'person-add-outline'

export default function RecentItem({ type, value }: RecentItemProps) {

  const renderIconType = (icon: string) => {
    switch (icon) {
      case 'received':
        return 'caret-down-circle-outline';
      case 'pay':
        return 'barcode-outline';
      case 'recharge':
        return 'phone-portrait-outline';
      default:
        return 'caret-up-circle-outline';
    };
  };

  const renderDescriptionType = (icon: string) => {
    switch (icon) {
      case 'received':
        return 'Recebido';
      case 'pay':
        return 'Pagamento';
      case 'recharge':
        return 'Recarga';
      default:
        return 'Enviado';
    };
  };

  const renderValueCurrency = (quantity: number) => {
    const valueFormatted = quantity.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    return valueFormatted;
  };

  return (
    <Container>
      <LeftArea>
        <IconArea>
          <Icon name={renderIconType(type)} />
        </IconArea>
        <InfoArea>
          <Description>{renderDescriptionType(type)}</Description>
          <Date>Jan 21, 2023</Date>
        </InfoArea>
      </LeftArea>
      <Value>{renderValueCurrency(value)}</Value>
    </Container>
  );
};
