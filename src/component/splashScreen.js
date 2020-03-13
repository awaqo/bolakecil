import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import logo from '../img/logo1.png';
import ts from '../img/logo-smk-telkompwt.png';

export default class Splash extends React.Component {
    async componentDidMount() {
        const data = await this.performTimeConsumingTask();

        if (data !== null) {
            this.props.navigation.navigate('Pilihan');
        }
    }

    performTimeConsumingTask = async () =>
        new Promise(resolve =>
            setTimeout(() => {
                resolve('result');
            }, 3000)
        );

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Image source={logo} />
                <Text style={styles.logotext}>Bola Kecil</Text>
                <View style={styles.stickybtn}>
                    <Text style={styles.btnText}>Powered by</Text>
                    <Image style={styles.logots} source={ts} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logotext: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 32,
        color: '#EB5757'
    },
    stickybtn: {
        position: 'absolute',
        bottom: 15,
        alignSelf: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: '#4F4F4F',
        fontSize: 14,
        fontFamily: 'PoppinsReg',
        marginBottom: 5
    },
    logots: {
        width: 110,
        height: 30,
    }
})