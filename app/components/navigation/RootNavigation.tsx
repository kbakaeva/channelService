import * as React from 'react';
import { FC } from 'react';
import { View } from 'react-native';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './StackNavigator';


const navigationRef = createNavigationContainerRef();

export const RootNavigation: FC = () => {
    return (
        // <View style={{ flex: 1, width: '100%' }}>
        <NavigationContainer ref={navigationRef}>
            <StackNavigator />
        </NavigationContainer>
        // </View>
    );
};