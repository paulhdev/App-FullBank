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

import { StackAppProps } from '../../routes/app.routes';

export default function Scanner() {

  const navigation = useNavigation<StackAppProps>();

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
    console.log('DATA: ', data);
    navigation.navigate('NewPayment');
  }

  if (hasPermission !== true) return null;

  return (
    <Container>
      <TitleArea>
        <Title text='Escaneie o código' />
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
