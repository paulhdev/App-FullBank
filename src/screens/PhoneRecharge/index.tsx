import { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import PhoneInput from 'react-native-phone-number-input';

import {
  Container,
  TitleArea,
  Button,
  Icon,
  ButtonPayment,
  ButtonPaymentText,
  PhoneText,
  ValueInfoText
} from './styles';

import Title from '../../components/Title';
import CardBalance from '../../components/CardBalance';

export default function PhoneRecharge() {

  const navigation = useNavigation();

  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);

  return (
    <Container>
      <TitleArea>
        <Title text='Recarga de celular' />
        <Button onPress={() => navigation.goBack()}>
          <Icon name='close-outline' />
        </Button>
      </TitleArea>

      <CardBalance />

      <PhoneText>Informe o número abaixo</PhoneText>
      <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="BR"
        layout="first"
        withShadow
        placeholder='Número de celular'
        containerStyle={{
          backgroundColor: '#453C6F',
          marginLeft: '-11%',
          marginTop: 10,
          borderTopLeftRadius: 7,
          borderBottomLeftRadius: 7
        }}
        textContainerStyle={{
          backgroundColor: '#CAC0E5',
          borderTopRightRadius: 7,
          borderBottomRightRadius: 7
        }}
        onChangeText={(text) => {
          setValue(text);
        }}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
        }}
      />

      <ValueInfoText>Valor da recarga</ValueInfoText>

      <ButtonPayment
        onPress={() => {
          const checkValid = phoneInput.current?.isValidNumber(value);
          setShowMessage(true);
          setValid(checkValid ? checkValid : false);
        }}
      >
        <ButtonPaymentText>
          Confirmar recarga
        </ButtonPaymentText>
      </ButtonPayment>

    </Container>
  );
};
