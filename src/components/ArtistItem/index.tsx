import React from 'react';
import { View, Image, Text, ImageStyle, StyleProp, TextStyle } from 'react-native';

import soundwave from '../../../assets/soundwave.png'

interface ArtistItemProps {
    name: string;
    music: string;
    image: any;
    soundwaveStyle?: StyleProp<ImageStyle>
    nameStyle?: StyleProp<TextStyle>
}

const ArtistItem: React.FC<ArtistItemProps> = ({ name, music, image, soundwaveStyle, nameStyle }) => {
    return (
        <View style={{ paddingVertical: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={image} />

                <View style={{marginLeft: 20}}>
                    <Text style={[{fontFamily: 'Poppins_500Medium', color: '#FFF'}, nameStyle]}>{name}</Text>
                    <Text style={{fontFamily: 'Poppins_500Medium', color: '#8C07A1'}}>{music}</Text>
                </View>
            </View>

            <Image source={soundwave} style={soundwaveStyle} />
        </View>
    );
}

export default ArtistItem;