import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Room from '../pages/Room';
import Meet from '../pages/Meet';

const { Screen, Navigator } = createStackNavigator();

function MeetStack() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='Meet' component={Meet} />
            <Screen name='Room' component={Room} />
        </Navigator>
    )
}

export default MeetStack;