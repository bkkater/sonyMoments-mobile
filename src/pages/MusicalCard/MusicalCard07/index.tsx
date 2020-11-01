import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import Header from '../../../components/Header';
import PrimaryButton from '../../../components/PrimaryButton';

import illustration from '../../../../assets/illustration02.png'
import { RectButton } from 'react-native-gesture-handler';

const MusicalCard07: React.FC = () => {
    const { goBack, navigate } = useNavigation();

    const handleNavigateToNextCard = () => {
        navigate('MusicalCard02')
    }
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

                    <PrimaryButton label='Galeria' onPress={handleNavigateToNextCard} styleButton={{ backgroundColor: '#331832' }} />

                </View>
            </View>

        </View>
    );
}

export default MusicalCard07;