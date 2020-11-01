import React, { useEffect, useState } from 'react';
import { View, Text, Image, Platform, AsyncStorage  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import Header from '../../../components/Header';
import PrimaryButton from '../../../components/PrimaryButton';

import illustration from '../../../../assets/illustration02.png'
import { RectButton } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';

const MusicalCard07: React.FC = () => {
    const { goBack, navigate } = useNavigation();
    
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        navigate('Playlist')

        if (!result.cancelled) {
            await AsyncStorage.setItem(
                'image', result.uri
            );
        }
    };
    
    return (
        <View style={{ backgroundColor: '#331832', padding: 20, flex: 1 }}>
            <Header />

            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, padding: 20 }}>
                <View
                    style={{
                        backgroundColor: '#901193', padding: 30, alignSelf: 'center', flex: 0.85, width: '100%', marginBottom: 40, borderRadius: 10, justifyContent: 'space-between'
                    }}>
                    <RectButton onPress={() => goBack()} style={{ width: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                        <Feather name="corner-up-left" size={30} color="white" style={{ marginBottom: 10 }} />
                    </RectButton>
                    <Text style={{ fontFamily: 'Poppins_500Medium', fontSize: 19, color: '#FFF' }}>
                        Agora escolha uma bela foto e veja a mágica acontecer
                    </Text>

                    <Image source={illustration} style={{ alignSelf: 'center' }} />

                    <PrimaryButton label='Galeria' onPress={pickImage} styleButton={{ backgroundColor: '#331832' }} />

                </View>
            </View>

        </View>
    );
}

export default MusicalCard07;