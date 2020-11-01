import React, { useEffect, useState } from 'react';
import { AsyncStorage, View, Image, Text } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

import PlaylistHeader from '../../components/PlaylistHeader';
import play from '../../../assets/play.png';
import miniLogo from '../../../assets/mini-logo.png';
import PrimaryButton from '../../components/PrimaryButton';

// import { Container } from './styles';

const Share: React.FC = () => {
    const [imageUri, setImageUri] = useState<string>();

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('image')
            if (value !== null) {
                setImageUri(value)
            }
        } catch (e) {
            console.error(e.message)
        }
    }

    return (
        <View style={{ backgroundColor: '#331832', padding: 20, flex: 1 }}>
            <PlaylistHeader />
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <View style={{ backgroundColor: '#C4C4C4', borderRadius: 8, maxWidth: 305 }}>
                    <Image source={play} style={{ position: 'absolute', left: '45%', bottom: '50%', zIndex: 5 }} />
                    <Image source={{ uri: imageUri }} style={{ width: 305, height: 195, borderRadius: 8, zIndex: 1 }} />

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', position: 'absolute', zIndex: 5, bottom: 90, left: 20 }}>
                        <Image source={miniLogo} />
                        <Text style={{ fontFamily: 'Poppins_500Medium', color: '#FFF' }}>A alegria de viver - Angela Maria</Text>
                    </View>

                    <Text style={{ fontFamily: 'Poppins_400Regular', color: '#FFF', padding: 10, paddingBottom: 0, fontSize: 14 }}>Curta esse cartão musical da Tina. Conheça essa música e mais outras no</Text>
                    <Text style={{ fontFamily: 'Poppins_400Regular', color: '#000', paddingHorizontal: 10, paddingBottom: 10, fontSize: 14 }}>app.sonymoments/playlist0001.com</Text>
                </View>

                <View style={{width: '80%', marginTop: 50}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 30 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name="whatsapp" size={28} color="#288A18" />
                            <Text style={{marginLeft: 15, fontFamily: 'Poppins_500Medium', fontSize: 18, color: '#FFF'}}>Whatsapp</Text>
                        </View>
                        <Feather name="send" size={24} color="white" />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 30 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name="instagram" size={28} color="#B51C53" />
                            <Text style={{marginLeft: 15, fontFamily: 'Poppins_500Medium', fontSize: 18, color: '#FFF'}}>Instagram</Text>
                        </View>
                        <Feather name="send" size={24} color="white" />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 30 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name="facebook" size={28} color="#3D539F" />
                            <Text style={{marginLeft: 15, fontFamily: 'Poppins_500Medium', fontSize: 18, color: '#FFF'}}>Facebook</Text>
                        </View>
                        <Feather name="send" size={24} color="white" />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name="twitter" size={28} color="#23BADB" />
                            <Text style={{marginLeft: 15, fontFamily: 'Poppins_500Medium', fontSize: 18, color: '#FFF'}}>Twitter</Text>
                        </View>
                        <Feather name="send" size={24} color="white" />
                    </View>
                </View>

                <PrimaryButton label='Baixar' onPress={()=> {}} styleButton={{marginTop: 25, padding: 20, paddingHorizontal: 50}}/>

            </View>

        </View>
    );
}

export default Share;