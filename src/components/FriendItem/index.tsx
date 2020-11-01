import React from 'react';
import { View, Text, Image } from 'react-native';

// import { Container } from './styles';

interface FriendItemProps {
    name: string;
    image: any;
}

const FriendItem: React.FC<FriendItemProps> = ({name, image}) => {
  return (
      <View style={{marginRight: 15}}>
          <Image source={image} />
          <Text style={{textAlign: 'center', fontFamily: 'Poppins_500Medium', fontSize: 12, color: '#A5A5A5', marginTop: 5}}>{name}</Text>
      </View>
  );
}

export default FriendItem;