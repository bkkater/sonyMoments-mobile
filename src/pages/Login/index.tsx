import React from 'react';
import { View, Image, TouchableHighlight, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';

import style from './styles';

import logo from '../../../assets/splash.png'
import PrimaryButton from '../../components/PrimaryButton';
import { RectButton } from 'react-native-gesture-handler';
import ButtonGroup from '../../components/ButtonGroup';

const Login: React.FC = () => {
    const { navigate } = useNavigation();

    const handleNavigateToHome = () => {
        navigate('MenuTabs')
    }

    return (
        <View style={{ backgroundColor: '#331832', padding: 20, flex: 1, justifyContent: 'space-between' }}>
            <View style={{marginTop: 120}}>
                <Image source={logo} style={{ alignSelf: 'center', marginBottom: 50 }} />

                <Input
                    label='E-mail'
                    type='emailAddress'
                    keyboardtype='default'
                    maxlength={50}
                />

                <Input
                    label='Senha'
                    type='password'
                    keyboardtype='default'
                    maxlength={15}
                />

                <Text style={{...style.buttonText, alignSelf: 'flex-end'}}>Esqueci minha senha</Text>
            </View>


            <ButtonGroup label="Entrar" onPress={handleNavigateToHome}/>
        </View>
    );
}

export default Login;