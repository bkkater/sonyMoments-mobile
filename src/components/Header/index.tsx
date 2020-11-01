import React from 'react';
import { View, Image } from 'react-native';

// import { Container } from './styles';

import logo from '../../../assets/logo-header.png'
import user from '../../../assets/user.png'


const Header: React.FC = () => {
  return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30}}>
          <Image source={logo}/>
          <Image source={user}/>

      </View>
  );
}

export default Header;