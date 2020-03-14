import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import cardSoftball from './img/materisoftball.png';
import cardTenisLapangan from './img/materitenislapangan.png';
import cardBulutangkis from './img/materibulutangkis.png';
import cardKasti from './img/materikasti.png';
import cardTenisMeja from './img/materitenismeja.png';
import cardLatihan from './img/latihan.png';
import logo from '../materi/img/logoputih.png'

import imgs from './img/quizilus.png'

class MenuLatihanScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar barStyle='light-content' />
                <View style={styles.header}>
                    <View style={styles.rect1}></View>
                    <View style={styles.rect2}></View>
                    <View style={styles.rect3}></View>
                    {/* <Icon size={40} style={styles.icon} name="ios-paper" /> */}
                    <Text style={styles.h2}>Asah pengetahuanmu</Text>
                    <Text style={styles.h3}>Kerjakan Quiz dan Latihan Soal</Text>
                    <View style={styles.circ}></View>
                </View>
                <View style={styles.examcontainer}>
                    <TouchableOpacity style={styles.examstart} onPress={() => this.props.navigation.navigate('Quiz')}>
                        <Text style={styles.examtext}>Quiz</Text>
                        <Text style={styles.examsoal}>10 Soal</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.examcontainer}>
                    <TouchableOpacity style={styles.examstart} onPress={() => this.props.navigation.navigate('Ujian')}>
                        <Text style={styles.examtext}>Latihan Soal</Text>
                        <Text style={styles.examsoal}>15 Soal</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.imgcont}>
                    <Image style={styles.imgs} source={imgs} />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c7efff'
    },
    header: {
        width: '100%',
        height: 200,
        backgroundColor: '#00B2FF',
        paddingHorizontal: 20,
        justifyContent: 'center',
        marginBottom: 30,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    rect1: {
        position: 'absolute',
        top: 20,
        right: 20,
        width: 70,
        height: 70,
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rect2: {
        position: 'absolute',
        top: 65,
        right: 65,
        width: 55,
        height: 55,
        backgroundColor: 'rgba(0, 0, 0, 0.08)'
    },
    rect3: {
        position: 'absolute',
        top: 30,
        right: 120,
        width: 25,
        height: 25,
        backgroundColor: 'rgba(0, 0, 0, 0.08)'
    },
    h2: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 20,
        color: '#fff',
        marginTop: 60
    },
    h3: {
        fontFamily: 'PoppinsLight',
        fontSize: 18,
        color: '#fff',
    },
    circ: {
        position: 'absolute',
        left: -50,
        bottom: 0,
        width: 150,
        height: 150,
        borderRadius: 300,
        backgroundColor: 'rgba(0, 0, 0, 0.06)'
    },
    examcontainer: {
        width: '95%',
        height: 60,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 5
    },
    examstart: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        borderRadius: 5
    },
    examtext: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 20,
        color: '#4F4F4F'
    },
    examsoal: {
        fontFamily: 'PoppinsReg',
        fontSize: 16,
        color: '#8d8d8d'
    },
    imgcont: {
        width: '95%',
        height: 250,
        alignSelf: 'center',
    },
    imgs: {
        width: '100%',
        height: '140%',
        zIndex: -1,
        opacity: 0.5
    },
});

export default MenuLatihanScreen;