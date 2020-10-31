import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Landing from '../pages/Landing';
import Login from '../pages/Login';

const { Screen, Navigator } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}> 
                <Screen name='Landing' component={Landing} />
                <Screen name='Login' component={Login} />

            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;