import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../../components/Header';
import PrimaryButton from '../../../components/PrimaryButton';

// import { Container } from './styles';

import illustration from '../../../../assets/illustration.png'

const MusicalCard01: React.FC = () => {
    const { navigate } = useNavigation();

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
                    <Text style={{ fontFamily: 'Poppins_500Medium', fontSize: 19, color: '#FFF' }}>
                        Pronto para o seu primeiro cartão musical? Antes vamos precisar de algumas respostas sobre você.
                    </Text>

                    <Image source={illustration} style={{ alignSelf: 'center' }} />

                    <PrimaryButton label='Avançar' onPress={handleNavigateToNextCard} styleButton={{ backgroundColor: '#331832' }} />

                </View>
            </View>

        </View>
    );
}

export default MusicalCard01;