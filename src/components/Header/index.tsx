import { useDrawerStatus } from '@react-navigation/drawer';
import { DrawerActions, useNavigation } from '@react-navigation/native';

import {
  Container,
  UserInfoArea,
  Avatar,
  InfoArea,
  BalanceValue,
  Username,
  ButtonMenu,
  Icon
} from './styles';

export default function Header() {

  const navigation = useNavigation();
  const drawerStatus = useDrawerStatus();

  const toggleDrawer = () => {
    drawerStatus === 'open'
      ?
      navigation.dispatch(DrawerActions.closeDrawer())
      :
      navigation.dispatch(DrawerActions.openDrawer())
  };

  return (
    <Container>
      <UserInfoArea>
        <Avatar source={{ uri: 'https://avatars.githubusercontent.com/u/42824466?v=4' }} />
        <InfoArea>
          <BalanceValue>R$1.597,00</BalanceValue>
          <Username>Paulo Henrique</Username>
        </InfoArea>
      </UserInfoArea>
      <ButtonMenu onPress={toggleDrawer}>
        {
          drawerStatus === 'open' ?
            <Icon name='close-outline' /> : <Icon name='grid-outline' />
        }
      </ButtonMenu>
    </Container>
  );
};
