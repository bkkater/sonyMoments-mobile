import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import background from '../../../assets/background.png'
import { RectButton } from 'react-native-gesture-handler';

function Landing() {
    return (
        <View style={{flex: 1}}>
            <ImageBackground source={background} style={{flex: 1, justifyContent: "space-around"}}>

                <View style={{ paddingVertical: 10, paddingHorizontal: 20, justifyContent: 'space-around', flex: 1 }}>
                    <View>
                        <Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 36, color: '#FFF' }}>Seja</Text>
                        <Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 36, color: '#FFF' }}>Bem-vindo(a)</Text>
                    </View>

                    <View style={{alignSelf: 'center', alignItems: 'center', marginTop: 15}}>
                        <RectButton style={{paddingHorizontal: 50, paddingVertical: 8, backgroundColor: '#393C3F', borderRadius: 8, opacity: 0.8}}>
                            <Text style={{ fontFamily: 'Poppins_500Medium', color: '#FFF', fontSize: 18 }}>
                                ENTRAR
                            </Text>
                        </RectButton>

                        <RectButton style={{marginTop: 30, marginBottom: -20}}>
                            <Text style={{ fontFamily: 'Poppins_400Regular', color: '#FFF' }}>
                                Não possui conta? Cadastre-se
                            </Text>
                        </RectButton>
                    </View>

                </View>
            </ImageBackground>

        </View>
    );
}

export default Landing;