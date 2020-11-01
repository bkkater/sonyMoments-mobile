import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

interface MusicCardProps {
    label: string;
}

const MusicCard: React.FC<MusicCardProps> = ({label}) => {
  return (
      <View style={{backgroundColor: 'rgba(255, 255, 255, 0.3)', height: 70, width: 100, alignItems: 'center', justifyContent: 'center', borderRadius: 7}}>
          <Text style={{fontFamily: 'Poppins_500Medium', color:'white', maxWidth: 57, textAlign: 'center'}}>{label}</Text>
      </View>
  );
}

export default MusicCard;