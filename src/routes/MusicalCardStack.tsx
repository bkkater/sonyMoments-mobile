import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import MusicalCard01 from '../pages/MusicalCard/MusicalCard01';
import MusicalCard02 from '../pages/MusicalCard/MusicalCard02';
import MusicalCard03 from '../pages/MusicalCard/MusicalCard03';
import MusicalCard04 from '../pages/MusicalCard/MusicalCard04';
import MusicalCard05 from '../pages/MusicalCard/MusicalCard05';
import MusicalCard06 from '../pages/MusicalCard/MusicalCard06';
import MusicalCard07 from '../pages/MusicalCard/MusicalCard07';
import Playlist from '../pages/Playlist';
import Share from '../pages/Share';



const { Screen, Navigator } = createStackNavigator();

function MusicalCardStack() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='MusicalCard01' component={MusicalCard01} />
            <Screen name='MusicalCard02' component={MusicalCard02} />
            <Screen name='MusicalCard03' component={MusicalCard03} />
            <Screen name='MusicalCard04' component={MusicalCard04} />
            <Screen name='MusicalCard05' component={MusicalCard05} />
            <Screen name='MusicalCard06' component={MusicalCard06} />
            <Screen name='MusicalCard07' component={MusicalCard07} />

            <Screen name='Playlist' component={Playlist} />

            <Screen name='Share' component={Share} />




        </Navigator>
    )
}

export default MusicalCardStack;