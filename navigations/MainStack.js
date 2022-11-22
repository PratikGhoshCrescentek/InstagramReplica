import { SideDrawer } from './DrawerNavigation';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Post from '../screens/Post/Post';

const Stack = createStackNavigator()

export default function MainStack(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SideDrawer" component={SideDrawer} options={{ headerShown: false }} /> 
                <Stack.Screen name="Post" component={Post}/> 
            </Stack.Navigator>
        </NavigationContainer>
    )
}
