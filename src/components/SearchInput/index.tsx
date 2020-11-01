import React from 'react';
import { TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

// import { Container } from './styles';

const SearchInput: React.FC = () => {
  return (
    <View
      style={{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: 'rgba(255, 255, 255, 0.3)', 
        width: '90%', 
        alignSelf: 'center', 
        justifyContent: 'space-between', 
        borderRadius: 7
      }}
    >
      <TextInput placeholder='Pesquisar' style={{padding: 8}}/>
      <Feather name="search" size={24} color="rgba(255, 255, 255, 0.7)" style={{marginRight: 5}}/>
    </View>
  );
}

export default SearchInput;