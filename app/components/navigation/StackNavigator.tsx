import * as React from 'react';
import { FC } from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { SignInScreen } from '../../views/SignIn/SignInScreen';
import { HomeScreen } from '../../views/Home/HomeScreen';

const Stack = createSharedElementStackNavigator();

export const StackNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName="ChannelMainScreen" screenOptions={() => ({
            headerShown: false,
            gestureEnabled: false,
        })}>
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );
};