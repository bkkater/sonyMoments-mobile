import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import Header from '../../../components/Header';
import PrimaryButton from '../../../components/PrimaryButton';
import SearchInput from '../../../components/SearchInput';
import ArtistImageCard from '../../../components/ArtistiImageCard';

const MusicalCard05: React.FC = () => {
    const { goBack, navigate } = useNavigation();

    const handleNavigateToNextCard = () => {
        navigate('MusicalCard06')
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
                            E as suas bandas favoritas?
                        </Text>
                    </View>

                    <SearchInput />

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <ArtistImageCard image={`https://i0.wp.com/palcopop.com/wp-content/uploads/2020/09/lagum-capa.png?fit=1277%2C869&ssl=1`} />
                        <ArtistImageCard image='https://ogimg.infoglobo.com.br/in/23312046-00a-af2/FT1086A/652/Natiruts-_-Creditos-Carlos-Muller.jpg' />

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <ArtistImageCard image='https://tododia.com.br/wp-content/uploads/tododia/skank.jpg' />
                        <ArtistImageCard image='https://previamente.files.wordpress.com/2015/06/the-neighbourhood.jpg' />

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <ArtistImageCard
                            image={`https://s2.glbimg.com/aSKRGfARw3Rk5J02CZeBZBv9TMA=/0x0:2550x2000/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/K/r/NNFuwbRIKDs6sxBiGAbA/fifthharmony.jpg`} />
                        <ArtistImageCard image={`https://www.nme.com/wp-content/uploads/2020/02/Foo-Fighters-Andreas-Neumann-2000-696x442.jpg`} />
                    </View>

                    <PrimaryButton label='Avançar' onPress={handleNavigateToNextCard} styleButton={{ backgroundColor: '#331832' }} />

                </View>
            </View>

        </View>
    );
}

export default MusicalCard05;