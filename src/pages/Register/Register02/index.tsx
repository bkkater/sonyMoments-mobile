import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

import ButtonGroup from '../../../components/ButtonGroup';
import Input from '../../../components/Input';

import style from './styles';

const Register02: React.FC = () => {
    const { navigate } = useNavigation();

    const [showDatePicker, setShowDatePicker] = useState(false)
    
      const openDatePicker = () => {
        setShowDatePicker(!showDatePicker)
      }

      const handleNavigateToHome = () => {
          navigate('MenuTabs')
      }

    return (
        <View style={{ backgroundColor: '#331832', padding: 20, flex: 1, justifyContent: 'space-between' }}>

            <Text style={style.text}>Queremos saber um pouco mais devocê</Text>

            <View style={{ marginTop: -40 }}>
                <Input
                    label='Nome ou apelido'
                    type='name'
                    keyboardtype='default'
                    maxlength={20}
                />

                <TouchableHighlight onPress={() => openDatePicker()} underlayColor='transparent' >
                    <View style={[{ ...style.inputContainer, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
                        <Input
                            label='Data de nascimento'
                            type='none'
                            keyboardtype='default'
                            maxlength={6}
                            style={{width: '80%'}}
                        />
                        <View style={style.iconContainer}>
                            <Feather name="calendar" size={24} color='white' />
                        </View>
                    </View>
                </TouchableHighlight>

                <Input
                    label='Gênero'
                    type='none'
                    keyboardtype='default'
                    maxlength={15}
                />
            </View>

            <ButtonGroup label='Avançar' onPress={handleNavigateToHome} />
        </View>
    );
}

export default Register02;