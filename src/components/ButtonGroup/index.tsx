import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import PrimaryButton from '../PrimaryButton';

import style from './styles';

interface ButtonGroupProps {
    onPress(): void
    label: string
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ onPress, label }) => {
    const { goBack } = useNavigation();

    return (
        <View style={style.buttons}>
            <RectButton style={style.goBackButton} onPress={() => goBack()}>
                <Text style={{ ...style.buttonText }}>Voltar</Text>
            </RectButton>

            <PrimaryButton onPress={onPress} label={label} />
        </View>
    );
}

export default ButtonGroup;