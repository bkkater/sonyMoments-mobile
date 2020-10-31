import { StatusBar } from 'expo-status-bar'
import React from 'react';
import { Ubuntu_400Regular, Ubuntu_500Medium, Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'

import AppStack from './src/routes/AppStack';
import AppLoading from 'expo/build/launch/AppLoading';

export default function App() {
  let [fontLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
    Poppins_400Regular, 
    Poppins_500Medium, 
    Poppins_600SemiBold, 
    Poppins_700Bold
  })

  if (!fontLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style='light' />
      </>
    );
  }

}