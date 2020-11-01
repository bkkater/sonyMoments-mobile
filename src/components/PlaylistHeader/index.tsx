import React from 'react';
import { View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

// import { Container } from './styles';

import logo from '../../../assets/logo-header.png'
import user from '../../../assets/user.png'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const PlaylistHeader: React.FC = () => {
  const { goBack } = useNavigation();
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30 }}>
      <RectButton onPress={() => goBack()} style={{ width: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
        <Feather name="corner-up-left" size={30} color="white" style={{ marginBottom: 10 }} />
      </RectButton>
      <Image source={user} />
    </View>
  );
}

export default PlaylistHeader;