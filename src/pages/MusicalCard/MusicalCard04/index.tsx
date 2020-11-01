import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import Header from '../../../components/Header';
import PrimaryButton from '../../../components/PrimaryButton';
import SearchInput from '../../../components/SearchInput';
import ArtistImageCard from '../../../components/ArtistiImageCard';

const MusicalCard04: React.FC = () => {
    const { goBack, navigate } = useNavigation();

    const handleNavigateToNextCard= () => {
        navigate('MusicalCard05')
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
                            Quais cantores e cantoras você mais gosta?
                        </Text>
                    </View>

                    <SearchInput />

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <ArtistImageCard image='https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/1/c/7/e/1c7e002c818b83c62122a1aeca2bb619.jpg' />
                        <ArtistImageCard image='https://www.jornaldorap.com.br/wp-content/uploads/2019/09/matue_kenny_g.jpg' />

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <ArtistImageCard image='https://upload.wikimedia.org/wikipedia/commons/5/59/GUSTTAVO_LIMA.jpg'/>
                        <ArtistImageCard image='https://veja.abril.com.br/wp-content/uploads/2020/07/beyonce_75616316_470887976891092_974503221915040124_n-e1596121598923.jpg' />

                    </View>
                    
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <ArtistImageCard image={`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdx_3CfgvdEKTLOKYVRz_97Hrr3NAklVdTkw&usqp=CAU`}/>
                        <ArtistImageCard image={`https://i2.wp.com/thelumberjack.org/wp-content/uploads/2020/04/gambino-2.jpg?fit=1774%2C1416&ssl=1`}/>
                    </View>

                    <PrimaryButton label='Avançar' onPress={handleNavigateToNextCard} styleButton={{ backgroundColor: '#331832' }} />

                </View>
            </View>

        </View>
    );
}

export default MusicalCard04;