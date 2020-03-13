import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StatusBar,
    Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import cardSoftball from './img/materisoftball.png';
import cardTenisLapangan from './img/materitenislapangan.png';
import cardBulutangkis from './img/materibulutangkis.png';
import cardKasti from './img/materikasti.png';
import cardTenisMeja from './img/materitenismeja.png';
import cardLatihan from './img/latihan.png';
import logo from './img/logoputih.png';

class MenuMateriScreen extends Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar hidden />
                <View style={styles.header}>
                    <View style={styles.rect1}></View>
                    <View style={styles.rect2}></View>
                    <View style={styles.rect3}></View>
                    <Text style={styles.h1}>Halo,</Text>
                    <Text style={styles.h2}>Pelajari materi bola kecil dengan penuh semangat!</Text>
                    <View style={styles.circ}></View>
                </View>
                <Text style={styles.materiTitleL}>Materi</Text>
                <View style={styles.materiContainerL}>
                    <TouchableOpacity style={styles.cardTenisLapangan}
                        onPress={() => this.props.navigation.navigate('TenisLapScreen')}>
                        <Image style={{ zIndex: 0, position: 'absolute' }} source={cardTenisLapangan} />
                        <Text style={{
                            marginTop: 172.2,
                            textAlign: 'right',
                            marginLeft: 25,
                            marginRight: 12.5,
                            fontSize: 12,
                            fontFamily: 'PoppinsSemiBold',
                            color: '#fff',
                        }}>Tenis Lapangan</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cardSoftball}
                        onPress={() => this.props.navigation.navigate('SoftballScreen')}>
                        <Image style={{ zIndex: 0, position: 'absolute' }} source={cardSoftball} />
                        <Text style={{
                            marginTop: 114,
                            textAlign: 'right',
                            marginLeft: 25,
                            marginRight: 11,
                            fontSize: 12,
                            fontFamily: 'PoppinsSemiBold',
                            color: '#fff',
                        }}>Softball</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cardKasti}
                        onPress={() => this.props.navigation.navigate('KastiScreen')}>
                        <Image style={{ zIndex: 0, position: 'absolute' }} source={cardKasti} />
                        <Text style={{
                            marginTop: 145,
                            textAlign: 'right',
                            marginLeft: 25,
                            marginRight: 10.5,
                            fontSize: 12,
                            fontFamily: 'PoppinsSemiBold',
                            color: '#fff',
                        }}>Kasti</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cardBulutangkis}
                        onPress={() => this.props.navigation.navigate('BulutangkisScreen')}>
                        <Image style={{ zIndex: 0, position: 'absolute' }} source={cardBulutangkis} />
                        <Text style={{
                            marginTop: 210,
                            textAlign: 'right',
                            marginLeft: 25,
                            marginRight: 12.4,
                            fontSize: 12,
                            fontFamily: 'PoppinsSemiBold',
                            color: '#fff',
                        }}>Bulutangkis</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cardTenisMeja}
                        onPress={() => this.props.navigation.navigate('TenisMejaScreen')}>
                        <Image style={{ zIndex: 0, position: 'absolute' }} source={cardTenisMeja} />
                        <Text style={{
                            marginTop: 115.5,
                            textAlign: 'right',
                            marginLeft: 25,
                            marginRight: 10.5,
                            fontSize: 12,
                            fontFamily: 'PoppinsSemiBold',
                            color: '#fff',
                        }}>Tenis Meja</Text>
                    </TouchableOpacity>

                    <View style={styles.cardLatihan}></View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        width: '100%',
        height: 200,
        backgroundColor: '#EB5757',
        paddingHorizontal: 20,
        justifyContent: 'center'
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
    logo: {
        width: '75%',
        height: '60%',
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
    h1: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 22,
        color: '#fff'
    },
    h2: {
        fontFamily: 'PoppinsReg',
        fontSize: 18,
        color: '#fff'
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
    materiTitleL: {
        marginTop: 15,
        textAlign: 'left',
        marginLeft: 25,
        fontSize: 24,
        fontFamily: 'PoppinsBold',
        color: '#4F4F4F',
    },
    materiContainerL: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 80,
        marginTop: 10
    },
    cardSoftball: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    cardTenisLapangan: {
        width: 150,
        height: 212,
        borderRadius: 10,
        marginRight: 12,
    },
    cardBulutangkis: {
        width: 150,
        height: 240,
        borderRadius: 10,
        marginTop: -50,
    },
    cardKasti: {
        width: 150,
        height: 177,
        borderRadius: 10,
        marginRight: 12,
        marginTop: 12
    },
    cardTenisMeja: {
        width: 150,
        height: 150,
        borderRadius: 10,
        marginTop: 12
    },
    cardLatihan: {
        width: 150,
        height: 150,
        borderRadius: 10,
        marginTop: 12,
        marginLeft: 12
    },

    materiTitle: {
        textAlign: 'left',
        marginLeft: 20,
        marginTop: 180,
        fontSize: 24,
        fontFamily: 'PoppinsBold',
        color: '#fff',
    },
    materiSubtitle: {
        textAlign: 'left',
        marginTop: 20,
        fontSize: 16,
        fontFamily: 'PoppinsBold',
        color: '#4F4F4F',
    },
    materiSubtitle1: {
        textAlign: 'left',
        fontSize: 14,
        fontFamily: 'PoppinsSemiBold',
        color: '#4F4F4F',
        marginTop: 5
    },
    materiSubtitle1sub: {
        textAlign: 'left',
        fontSize: 14,
        fontFamily: 'PoppinsSemiBold',
        color: '#4F4F4F',
        marginLeft: 20
    },
    materiContent: {
        textAlign: 'justify',
        marginTop: 5,
        fontFamily: 'PoppinsReg',
        fontSize: 12,
        color: '#4F4F4F',
        lineHeight: 18,
    },
    materiContentSub: {
        textAlign: 'justify',
        marginTop: 5,
        fontFamily: 'PoppinsReg',
        fontSize: 12,
        color: '#4F4F4F',
        lineHeight: 18,
        marginLeft: 20
    },
    materiContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginRight: 25,
        marginLeft: 25,
        marginBottom: 20,
    },
});

export default MenuMateriScreen;