import React from 'react';
import {View, Text, Image} from 'react-native';
import ActionButton from './ActionButton'
import {colors} from '../../utils';
import {welcomeAuthpng} from '../../assets';

const WelcomeAuth = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.navigate(screen);
    }

    return (
        <View style={styles.wrapper.page}>
            <Image source={welcomeAuthpng} style={styles.wrapper.illustration} />
            <Text style={styles.text.welcome}>Hi, Selamat Datang</Text>
            <ActionButton 
                desc='Silahkan masuk, jika anda sudah memiliki akun' title='Masuk' 
                onPress={() => handleGoTo('Login')}
            />
            <ActionButton 
                desc='atau silahkan daftar jika Anda belum memiliki akun' title='Daftar' 
                onPress={() => handleGoTo('Register')}
            />
        </View>
    );
};

const styles= {
    wrapper: {
        page: {
            alignItems: 'center', 
            justifyContent: 'center', 
            flex: 1, 
            backgroundColor: 'white'
        },
        illustration: {
            width: 219, 
            height: 117, 
            backgroundColor: colors.default, 
            marginBottom: 10
        },
    },
    text: {
        welcome: {
            fontSize: 18, 
            fontWeight: 'bold', 
            color: colors.default, 
            marginBottom: 89
        }
    }
}

export default WelcomeAuth;
