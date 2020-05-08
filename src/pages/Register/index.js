import React from 'react';
import {View, Text} from 'react-native';
import {colors} from '../../utils';
import {Input} from '../../components';
import {IconBack, RegisterImage} from '../../assets';

const Register = () => {
    return (
        <View style={styles.wrapper.page}>
            <IconBack width={38} height={31} style={styles.illustration} />
            <RegisterImage width={186} height={200} />
            <Text style={styles.text}>
                Mohon mengisi beberapa data untuk proses data
            </Text>
            <View style={styles.space(39)} />
            <Input placeholder="nama lengkap" />
            <View style={styles.space(43)} />
            <Input placeholder="email" />
            <View style={styles.space(43)} />
            <Input placeholder="password" />
        </View>
    );
};

const styles = {
    wrapper: {
        page: {padding: 20}
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.default,
        marginTop:16,
        maxWidth: 200
    },
    illustration: {
        marginTop: 6
    },
    space: (value) => {
        return {
            height: value
        };
    }
};

export default Register;
