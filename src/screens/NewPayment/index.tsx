import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import {
  Container,
  TitleArea,
  Button,
  Icon,
  BarCodeScannerArea,
  ButtonBarCodeNumber,
  ButtonBarCodeNumberText
} from './styles';

import Title from '../../components/Title';
import { Alert } from 'react-native';

export default function NewPayment() {

  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    }

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: { type: string, data: string }) => {
    setScanned(true);
    Alert.alert(`Código de barras escaneado - type: ${type} and data: ${data}`);
  }

  if (hasPermission !== true) return null;

  return (
    <Container>
      <TitleArea>
        <Title text='Novo Pagamento' />
        <Button onPress={() => navigation.goBack()}>
          <Icon name='close-outline' />
        </Button>
      </TitleArea>

      <BarCodeScannerArea
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      />

      <ButtonBarCodeNumber>
        <ButtonBarCodeNumberText>
          Digite o código de barras
        </ButtonBarCodeNumberText>
      </ButtonBarCodeNumber>

    </Container>
  );
};
