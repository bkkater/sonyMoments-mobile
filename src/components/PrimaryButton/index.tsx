import React from 'react';
import { TouchableHighlight, View, Text, StyleProp, ViewStyle } from 'react-native';

import style from './styles';

interface PrimaryButtonProps {
    onPress(): void,
    label: string,
    styleButton?: StyleProp<ViewStyle>
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onPress, label, styleButton }) => {  
    return (
        <TouchableHighlight style={[style.button, styleButton]} onPress={onPress} underlayColor="#901193">
            <Text style={style.buttonText}>{label}</Text>
        </TouchableHighlight>
    );
}

export default PrimaryButton;