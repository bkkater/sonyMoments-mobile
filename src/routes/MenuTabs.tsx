import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Home from '../pages/Home';
import MusicalCardStack from './MusicalCardStack';
import Meet from '../pages/Meet';
import MeetStack from './MeetStack';

const Tab = createBottomTabNavigator();

export default function MenuTabs() {

    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 75,
                    position: 'absolute',
                    borderTopColor: 'black'
                },
                tabStyle: {
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                labelStyle: {
                    fontFamily: 'Ubuntu_700Bold',
                    fontSize: 11,
                    marginBottom: 10
                },
                keyboardHidesTabBar: true,
                inactiveBackgroundColor: '#261125',
                activeBackgroundColor: '#261125',
                inactiveTintColor: 'transparent',
                activeTintColor: 'transparent',

            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Feather name="home" size={30} color={focused ? '#901193' : '#87838E'} style={{marginTop: 15}}/>
                        );
                    }
                }} />
            <Tab.Screen
                name="Cam"
                component={MusicalCardStack}
                options={{
                    tabBarLabel: 'Cam',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                                <Feather name="camera" size={35} color={focused ? '#901193' : '#87838E'} style={{marginTop: 15}}/>
                        );
                    }
                }} />
            <Tab.Screen
                name="MeetStack"
                component={MeetStack}
                options={{
                    tabBarLabel: 'MeetStack',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Feather name="users" size={30} color={focused ? '#901193' : '#87838E'} style={{marginTop: 15}}/>
                        );
                    }
                }} />

        </Tab.Navigator>
    );
}