import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import Header from '../../../components/Header';
import PrimaryButton from '../../../components/PrimaryButton';
import MusicCard from '../../../components/MusicCard';

const MusicalCard03: React.FC = () => {
    const { goBack, navigate } = useNavigation();

    const handleNavigateToNextCard= () => {
        navigate('MusicalCard04')
    }
    return (
        <View style={{ backgroundColor: '#331832', padding: 20, flex: 1 }}>
            <Header />

            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, padding: 20 }}>
                <View style={{ backgroundColor: '#901193', padding: 30, alignSelf: 'center', flex: 0.95, width: '100%', marginBottom: 40, borderRadius: 10, justifyContent: 'space-between' }}>
                    <View>
                        <RectButton onPress={() => goBack()} style={{ width: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                            <Feather name="corner-up-left" size={30} color="white" style={{ marginBottom: 10 }} />
                        </RectButton>
                        <Text style={{ fontFamily: 'Poppins_500Medium', fontSize: 19, color: '#FFF' }}>
                            A maioria das músicas que você curte fazem parte de quais décadas?
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <MusicCard label='Atuais' />
                        <MusicCard label='2010 - 2020' />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <MusicCard label='2000’s' />
                        <MusicCard label='90’s' />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <MusicCard label='80’s' />
                        <MusicCard label='70’s' />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <MusicCard label='60’s' />
                        <MusicCard label='Antigas' />
                    </View>
                    <PrimaryButton label='Avançar' onPress={handleNavigateToNextCard} styleButton={{ backgroundColor: '#331832' }} />

                </View>
            </View>

        </View>
    );
}

export default MusicalCard03;