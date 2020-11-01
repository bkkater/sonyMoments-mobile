import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import Header from '../../../components/Header';
import PrimaryButton from '../../../components/PrimaryButton';
import SearchInput from '../../../components/SearchInput';
import ArtistImageCard from '../../../components/ArtistiImageCard';
import MusicCard from '../../../components/MusicCard';

const MusicalCard06: React.FC = () => {
    const { goBack, navigate } = useNavigation();

    const handleNavigateToNextCard = () => {
        navigate('MusicalCard07')
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
                            De onde vem essas músicas?
                        </Text>
                    </View>

                    <SearchInput />

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <MusicCard label='BRASIL' />
                        <MusicCard label='EUA' />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <MusicCard label='FRANÇA' />
                        <MusicCard label='CORÉIA DO SUL' />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <MusicCard label='JAPÃO' />
                        <MusicCard label='REINO UNIDO' />
                    </View>
                    <PrimaryButton label='Avançar' onPress={handleNavigateToNextCard} styleButton={{ backgroundColor: '#331832' }} />

                </View>
            </View>

        </View>
    );
}

export default MusicalCard06;