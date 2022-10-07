import * as React from 'react';
import { FC } from 'react';
import { View, Image, Pressable } from 'react-native';
import { ExitIcon } from '../../assets/icons/exitIcon';
import Utils from '../../services/utils';
import { getStyle } from './styles';

interface Props {
    isShow: boolean;
    navigation: any;
};

export const HeaderComponent: FC<Props> = ({ isShow, navigation }) => {
    const styles = React.useMemo(() => getStyle(), []);
    return (
        <View style={styles.container}>
            {Utils.isTablet === 'iPad'
                ? <Image source={require('../../assets/images/logoTablet.png')} />
                : <Image source={require('../../assets/images/logo.png')} />}
            {isShow &&
                <Pressable
                    onPress={() => navigation?.navigate('SignInScreen')}
                    style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
                    <ExitIcon />
                </Pressable>
            }
        </View>
    )
};


