import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Register01 from '../pages/Register/Register01';
import Register02 from '../pages/Register/Register02';

import MenuTabs from './MenuTabs';

const { Screen, Navigator } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}> 
                <Screen name='Landing' component={Landing} />
                <Screen name='Login' component={Login} />

                <Screen name='MenuTabs' component={MenuTabs} />
                <Screen name='Register01' component={Register01} />
                <Screen name='Register02' component={Register02} />

            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;