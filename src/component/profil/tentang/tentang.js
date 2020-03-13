import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, Modal, Dimensions, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import adit from '../img/adit.jpeg'
import afrizal from '../img/frizal.jpeg'
import april from '../img/april.jpeg'
import aqil from '../img/aqil.jpeg'
import baroq from '../img/baroq.jpeg'

import logo from '../img/logo1.png'

export default class Tentang extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bola: false,
            adit: false,
            afrizal: false,
            april: false,
            aqil: false,
            baroq: false
        }
    }

    _bola = () => {
        this.setState({ bola: !this.state.bola });
    }

    _adit = () => {
        this.setState({ adit: !this.state.adit });
    }
    _afrizal = () => {
        this.setState({ afrizal: !this.state.afrizal });
    }
    _april = () => {
        this.setState({ april: !this.state.april });
    }
    _aqil = () => {
        this.setState({ aqil: !this.state.aqil });
    }
    _baroq = () => {
        this.setState({ baroq: !this.state.baroq });
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Modal
                    animationType='slide'
                    transparent
                    visible={this.state.bola}
                    onRequestClose={() => { this.setState({ bola: !this.state.bola }); }}>
                    <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)', justifyContent: 'center' }}>
                        <View style={{ width: '90%', height: 420, backgroundColor: '#FFF', alignSelf: 'center', paddingVertical: 20 }}>
                            <View>
                                <TouchableOpacity style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} onPress={this._bola}>
                                    <Icon color={'#EB5757'} size={40} name="ios-arrow-round-back" />
                                    <Text style={{ marginLeft: 10, fontFamily: 'PoppinsSemiBold', fontSize: 16 }}>Tentang Aplikasi Bola Kecil</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </Modal>

                {/* profil member */}
                <Modal
                    animationType='slide'
                    transparent
                    visible={this.state.adit}
                    onRequestClose={() => { this.setState({ adit: !this.state.adit }); }}>
                    <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)', justifyContent: 'center' }}>
                        <View style={{ width: '90%', height: 420, backgroundColor: '#FFF', alignSelf: 'center', paddingVertical: 20 }}>
                            <View>
                                <TouchableOpacity style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} onPress={this._bola}>
                                    <Icon color={'#EB5757'} size={40} name="ios-arrow-round-back" />
                                    <Text style={{ marginLeft: 10, fontFamily: 'PoppinsSemiBold', fontSize: 16 }}>Tentang Aplikasi Bola Kecil</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.textbola}>
                                <Text style={{ fontFamily: 'PoppinsReg' }}>Bola Kecil adalah aplikasi e-book yang berisi tentang materi-materi olahraga seputar bola kecil.</Text>
                            </View>
                        </View>
                    </View>
                </Modal>
                {/* end */}
                <View style={styles.content}>
                    <View style={styles.textbola}>
                        <Text style={{ fontFamily: 'PoppinsReg', color: '#3a3a3a' }}>Bola Kecil adalah aplikasi e-book yang berisi tentang materi-materi olahraga seputar bola kecil.</Text>
                        <Text></Text>
                        <Text style={{ fontFamily: 'PoppinsReg', color: '#3a3a3a' }}>Materi yang ada di dalam aplikasi bola kecil berbasis teks, gambar, dan video. Jadi, buat kalian yang ingin belajar teknik atau cara bermain namun kurang bisa memahami maksud dari teorinya, kalian bisa melihat gambar ataupun videonya.</Text>
                        <Text></Text>
                        <Text style={{ fontFamily: 'PoppinsReg', color: '#3a3a3a' }}>Tak hanya materi, Aplikasi Bola Kecil juga dilengkapi dengan adanya fitur Latian Soal untuk menguji kemampuan pengguna.</Text>
                    </View>
                    <Text style={{ fontFamily: 'PoppinsSemiBold', color: '#3a3a3a', marginBottom: 10, fontSize: 18}}>Anggota Tim</Text>
                    <View style={styles.person}>
                        <View style={styles.img}>
                            <Image style={styles.foto} source={adit} />
                        </View>
                        <View style={styles.textcont}>
                            <Text style={styles.nama} onPress={this._adit}>Aditya Nur Hidayatullah</Text>
                            <Text style={styles.tugas}>UI/UX Designer</Text>
                        </View>
                    </View>
                    <View style={styles.person}>
                        <View style={styles.img}>
                            <Image style={styles.foto} source={afrizal} />
                        </View>
                        <View style={styles.textcont}>
                            <Text style={styles.nama}>Afrizal Fajar Barokah</Text>
                            <Text style={styles.tugas}>Content Writer</Text>
                        </View>
                    </View>
                    <View style={styles.person}>
                        <View style={styles.img}>
                            <Image style={styles.foto} source={april} />
                        </View>
                        <View style={styles.textcont}>
                            <Text style={styles.nama}>Apriliya Ardiyanto</Text>
                            <Text style={styles.tugas}>Content Writer</Text>
                        </View>
                    </View>
                    <View style={styles.person}>
                        <View style={styles.img}>
                            <Image style={styles.foto} source={aqil} />
                        </View>
                        <View style={styles.textcont}>
                            <Text style={styles.nama}>Aqil Jawadal Furqon</Text>
                            <Text style={styles.tugas}>Developer</Text>
                        </View>
                    </View>
                    <View style={styles.person}>
                        <View style={styles.img}>
                            <Image style={styles.foto} source={baroq} />
                        </View>
                        <View style={styles.textcont}>
                            <Text style={styles.nama}>Bariq Alfariz Arunha</Text>
                            <Text style={styles.tugas}>UI/UX Designer</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
    },
    header: {
        width: '100%',
        height: 150,
        backgroundColor: '#EB5757',
        paddingHorizontal: 20
    },
    bola: {
        width: 100,
        height: 40,
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 18,
        color: '#EB5757'
    },
    textbola: {
        marginBottom: 25
    },
    rect1: {
        position: 'absolute',
        top: -30,
        right: 20,
        width: 70,
        height: 70,
        backgroundColor: 'rgba(0, 0, 0, 0.08)'
    },
    rect2: {
        position: 'absolute',
        top: 15,
        right: 65,
        width: 55,
        height: 55,
        backgroundColor: 'rgba(0, 0, 0, 0.08)'
    },
    rect3: {
        position: 'absolute',
        top: -30,
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
        fontFamily: 'PoppinsLight',
        fontSize: 14,
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
    content: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
    person: {
        width: '100%',
        height: 66,
        flexDirection: 'row',
        marginBottom: 20
    },
    img: {
        width: 66,
        height: 66,
        backgroundColor: '#8d8d8d',
        borderRadius: 5
    },
    foto: {
        width: '100%',
        height: '100%',
        borderRadius: 5
    },
    textcont: {
        width: '80%',
        height: 66,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        justifyContent: 'center'
    },
    nama: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 14,
        color: '#3a3a3a'
    },
    tugas: {
        fontFamily: 'PoppinsLight',
        fontSize: 12,
        color: '#6d6d6d'
    },
})