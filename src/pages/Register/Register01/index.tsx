import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import ButtonGroup from '../../../components/ButtonGroup';
import Input from '../../../components/Input';

import style from './styles';

const Register01: React.FC = () => {
    const { navigate } = useNavigation();

    const navigateToRegister02 = () => {
        navigate('Register02')
    }

    return (
        <View style={{ backgroundColor: '#331832', padding: 20, flex: 1, justifyContent: 'space-between' }}>

            <Text style={style.text}>Escolha seus dados de acesso</Text>

            <View style={{marginTop: -80}}>
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
            </View>

            <ButtonGroup label='Avançar' onPress={navigateToRegister02}/>
        </View>
    );
}

export default Register01;