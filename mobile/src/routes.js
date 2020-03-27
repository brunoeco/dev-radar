import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main'
import Profile from './pages/Profile'

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator  screenOptions={{
                headerStyle: {
                  backgroundColor: '#7d40e7',
                },
                headerTintColor: '#fff',
                headerBackTitleVisible: false,
            }}>
                <Stack.Screen name='DevRadar' component={Main} />
                <Stack.Screen name='Perfil no Github' component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Routes;