import React from 'react';
import { View, Image, StyleProp, ImageStyle } from 'react-native';

// import { Container } from './styles';

interface ArtistImageCardProps {
    image: string;
    style?: StyleProp<ImageStyle>;
}

const ArtistImageCard: React.FC<ArtistImageCardProps> = ({image, style}) => {
  return (
      <View style={{ height: 70, width: 100, alignItems: 'center', justifyContent: 'center', borderRadius: 7, borderWidth: 1, borderColor: '#CF0BEF', padding: 5}}>
          <Image source={{ uri: image}} style={[{width: '100%', height: '100%', borderRadius: 7}, style]}/>
      </View>
  );
}

export default ArtistImageCard;