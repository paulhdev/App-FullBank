import {
  Container,
  IconArea,
  Icon,
  Description
} from './styles';

type OperationItemProps = {
  icon: 'caret-up-circle-outline' | 'caret-down-circle-outline' | 'phone-portrait-outline' | 'barcode-outline' | 'person-add-outline';
  description: string;
};

export default function OperationItem({ icon, description }: OperationItemProps) {
  return (
    <Container>
      <IconArea>
        <Icon name={icon} />
      </IconArea>
      <Description>{description}</Description>
    </Container>
  );
};
