import { useState } from 'react';
import { ListRenderItem } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  TitleArea,
  Button,
  Icon,
  RecentsArea
} from './styles';

import Title from '../../components/Title';
import RecentItem from '../../components/RecentItem';

type RecentsProps = {
  id: string;
  type: 'pay' | 'transfer' | 'received' | 'recharge';
  value: number;
  // createdAt: Date;
};

export default function AllRecents() {

  const navigation = useNavigation();

  const [recents, setRecents] = useState<RecentsProps[] | []>([
    { id: '1', type: 'transfer', value: 79 },
    { id: '2', type: 'transfer', value: 21 },
    { id: '3', type: 'received', value: 15.50 },
    { id: '4', type: 'pay', value: 60 },
    { id: '5', type: 'recharge', value: 12 },
    { id: '6', type: 'recharge', value: 20 },
    { id: '7', type: 'received', value: 125 },
    { id: '8', type: 'pay', value: 25 },
    { id: '9', type: 'transfer', value: 15 },
    { id: '10', type: 'pay', value: 59.90 },
  ]);

  const renderItem: ListRenderItem<RecentsProps> = ({ item }) => <RecentItem type={item.type} value={item.value} />

  return (
    <Container>
      <TitleArea>
        <Title text='Recentes' />
        <Button onPress={() => navigation.goBack()}>
          <Icon name='arrow-back-outline' />
        </Button>
      </TitleArea>
      <RecentsArea
        data={recents}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
