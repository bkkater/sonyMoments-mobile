import React from 'react';
import { View, Image, StyleProp, ImageStyle } from 'react-native';

// import { Container } from './styles';

import logo from '../../../assets/logo-header.png'
import user from '../../../assets/user.png'

interface HeaderProps {
  style?: StyleProp<ImageStyle>
}

const Header: React.FC<HeaderProps> = ({style}) => {
  return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30}}>
          <Image source={logo}/>
          <Image source={user} style={style}/>

      </View>
  );
}

export default Header;