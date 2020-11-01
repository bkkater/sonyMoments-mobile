import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const Meet: React.FC = () => {
    const { navigate } = useNavigation();

    function handleNavigateToRoom() {
        navigate('Room')
    }

    return (
        <View style={{ backgroundColor: '#331832', padding: 20, flex: 1 }}>
            <Header />

            <View style={{ marginVertical: 30 }}>
                <Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 26, color: '#FFF', marginBottom: 5 }}>Salão de reuniões musicais</Text>
                <View style={{ borderWidth: 1, borderColor: '#8c07a1', borderRadius: 15 }} />
            </View>

            <Text style={{ fontFamily: 'Poppins_500Medium', fontSize: 16, color: '#FFF', marginBottom: 5 }}>Encontros marcados</Text>

            <View style={{ marginLeft: 15, marginTop: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                    <View style={{ justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: 18, color: '#FFF', marginBottom: 5 }}>SALA - AMIGOS DA TINA</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: 14, color: '#cccccc', marginBottom: 5 }}>Código: </Text>
                            <Text style={{ fontFamily: 'Poppins_500Medium', fontSize: 14, color: '#FFF', marginBottom: 5 }}>X001PC</Text>
                            <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: 14, color: '#cccccc', marginBottom: 5, marginLeft: 50 }}>01/11/20 - 18h</Text>
                        </View>
                    </View>
                </View>

                <RectButton
                    style={{ width: 50, height: 40, backgroundColor: '#901193', alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}
                    onPress={handleNavigateToRoom}
                >
                    <Feather name="chevrons-right" color="#FFf" size={30} />
                </RectButton>
            </View>
            <RectButton
                style={{ width: 60, 
                    height: 60, 
                    backgroundColor: '#901193', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    borderRadius: 50,
                    position: 'absolute',
                    bottom: 100,
                    right: 20
                }}
            >
                <Feather name="plus" color="#FFF" size={30} />
            </RectButton>
        </View>
    );
}

export default Meet;