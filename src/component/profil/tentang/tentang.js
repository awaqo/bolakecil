import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, Modal, Dimensions, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5'

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
                {/* profil member */}
                {/* adit */}
                <Modal
                    animationType='slide'
                    transparent
                    visible={this.state.adit}
                    onRequestClose={() => { this.setState({ adit: !this.state.adit }); }}>
                    <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)', justifyContent: 'center' }}>
                        <View style={{ width: '90%', height: 420, backgroundColor: '#FFF', alignSelf: 'center', paddingVertical: 20 }}>
                            <View>
                                <TouchableOpacity style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} onPress={this._adit}>
                                    <Icon color={'#EB5757'} size={40} name="ios-arrow-round-back" />
                                    <Text style={{ fontFamily: 'PoppinsSemiBold', color: '#3a3a3a', fontSize: 18, marginLeft: 10, marginTop: 5 }}>Kontak</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.contact}>
                                <Icon name="logo-instagram" size={30} />
                                <Text onPress={() => Linking.openURL('https://www.instagram.com/aditya_nur28/')} style={{ fontFamily: 'PoppinsReg', marginLeft: 10 }}>Instagram</Text>
                            </View>
                            <View style={styles.contact}>
                                <Icon name="logo-github" size={30} />
                                <Text onPress={() => Linking.openURL('https://github.com/adityaanh')} style={{ fontFamily: 'PoppinsReg', marginLeft: 10 }}>Github</Text>
                            </View>
                            <View style={styles.contact}>
                                <Icon2 name="behance" size={25} />
                                <Text onPress={() => Linking.openURL('https://www.behance.net/adityanh02f035')} style={{ fontFamily: 'PoppinsReg', marginLeft: 10 }}>Behance</Text>
                            </View>
                            <View style={styles.contact}>
                                <Icon name="ios-mail" size={30} />
                                <Text style={{ fontFamily: 'PoppinsReg', marginLeft: 10 }}>aditya.n.h02@gmail.com</Text>
                            </View>
                        </View>
                    </View>
                </Modal>
                {/* afrizal */}
                <Modal
                    animationType='slide'
                    transparent
                    visible={this.state.afrizal}
                    onRequestClose={() => { this.setState({ afrizal: !this.state.afrizal }); }}>
                    <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)', justifyContent: 'center' }}>
                        <View style={{ width: '90%', height: 420, backgroundColor: '#FFF', alignSelf: 'center', paddingVertical: 20 }}>
                            <View>
                                <TouchableOpacity style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} onPress={this._afrizal}>
                                    <Icon color={'#EB5757'} size={40} name="ios-arrow-round-back" />
                                    <Text style={{ fontFamily: 'PoppinsSemiBold', color: '#3a3a3a', fontSize: 18, marginLeft: 10, marginTop: 5 }}>Kontak</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.contact}>
                                <Icon name="logo-instagram" size={30} />
                                <Text onPress={() => Linking.openURL('https://www.instagram.com/afrizalfajar_/')} style={{ fontFamily: 'PoppinsReg', marginLeft: 10 }}>Instagram</Text>
                            </View>
                            <View style={styles.contact}>
                                <Icon2 name="behance" size={25} />
                                <Text onPress={() => Linking.openURL('https://www.behance.net/afrizalfaj894a')} style={{ fontFamily: 'PoppinsReg', marginLeft: 10 }}>Behance</Text>
                            </View>
                            <View style={styles.contact}>
                                <Icon name="ios-mail" size={30} />
                                <Text style={{ fontFamily: 'PoppinsReg', marginLeft: 10 }}>afrizalfajar14@gmail.com</Text>
                            </View>
                        </View>
                    </View>
                </Modal>
                {/* april */}
                <Modal
                    animationType='slide'
                    transparent
                    visible={this.state.april}
                    onRequestClose={() => { this.setState({ april: !this.state.april }); }}>
                    <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)', justifyContent: 'center' }}>
                        <View style={{ width: '90%', height: 420, backgroundColor: '#FFF', alignSelf: 'center', paddingVertical: 20 }}>
                            <View>
                                <TouchableOpacity style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} onPress={this._april}>
                                    <Icon color={'#EB5757'} size={40} name="ios-arrow-round-back" />
                                    <Text style={{ fontFamily: 'PoppinsSemiBold', color: '#3a3a3a', fontSize: 18, marginLeft: 10, marginTop: 5 }}>Kontak</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.contact}>
                                <Icon name="logo-instagram" size={30} />
                                <Text onPress={() => Linking.openURL('https://www.instagram.com/apriliyaard04/')} style={{ fontFamily: 'PoppinsReg', marginLeft: 10 }}>Instagram</Text>
                            </View>
                            <View style={styles.contact}>
                                <Icon name="logo-facebook" size={30} />
                                <Text onPress={() => Linking.openURL('https://facebook.com/apriliyaard/')} style={{ fontFamily: 'PoppinsReg', marginLeft: 10 }}>Facebook</Text>
                            </View>
                            <View style={styles.contact}>
                                <Icon name="logo-dribbble" size={30} />
                                <Text onPress={() => Linking.openURL('https://dribbble.com/aprilah')} style={{ fontFamily: 'PoppinsReg', marginLeft: 10 }}>Dribbble</Text>
                            </View>
                            <View style={styles.contact}>
                                <Icon name="logo-github" size={30} />
                                <Text onPress={() => Linking.openURL('https://github.com/ApriliyaArdiyanto')} style={{ fontFamily: 'PoppinsReg', marginLeft: 10 }}>Github</Text>
                            </View>
                            <View style={styles.contact}>
                                <Icon2 name="behance" size={25} />
                                <Text onPress={() => Linking.openURL('https://www.behance.net/aprlrpl44dd7f')} style={{ fontFamily: 'PoppinsReg', marginLeft: 10 }}>Behance</Text>
                            </View>
                            <View style={styles.contact}>
                                <Icon name="ios-mail" size={30} />
                                <Text style={{ fontFamily: 'PoppinsReg', marginLeft: 10 }}>aprlrpl44@gmail.com</Text>
                            </View>
                        </View>
                    </View>
                </Modal>
                {/* aqil */}
                <Modal
                    animationType='slide'
                    transparent
                    visible={this.state.aqil}
                    onRequestClose={() => { this.setState({ aqil: !this.state.aqil }); }}>
                    <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)', justifyContent: 'center' }}>
                        <View style={{ width: '90%', height: 420, backgroundColor: '#FFF', alignSelf: 'center', paddingVertical: 20 }}>
                            <View>
                                <TouchableOpacity style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} onPress={this._aqil}>
                                    <Icon color={'#EB5757'} size={40} name="ios-arrow-round-back" />
                                    <Text style={{ fontFamily: 'PoppinsSemiBold', color: '#3a3a3a', fontSize: 18, marginLeft: 10, marginTop: 5 }}>Kontak</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.contact}>
                                <Icon name="logo-instagram" size={30} />
                                <Text onPress={() => Linking.openURL('https://www.instagram.com/aqiljf_/')} style={{ fontFamily: 'PoppinsReg', marginLeft: 10 }}>Instagram</Text>
                            </View>
                            <View style={styles.contact}>
                                <Icon name="logo-github" size={30} />
                                <Text onPress={() => Linking.openURL('https://github.com/awaqo')} style={{ fontFamily: 'PoppinsReg', marginLeft: 10 }}>Github</Text>
                            </View>
                            <View style={styles.contact}>
                                <Icon name="logo-linkedin" size={30} />
                                <Text onPress={() => Linking.openURL('https://www.linkedin.com/in/awaqo-/')} style={{ fontFamily: 'PoppinsReg', marginLeft: 10 }}>LinkedIn</Text>
                            </View>
                            <View style={styles.contact}>
                                <Icon name="logo-facebook" size={30} />
                                <Text onPress={() => Linking.openURL('https://facebook.com/awaqo/')} style={{ fontFamily: 'PoppinsReg', marginLeft: 10 }}>Facebook</Text>
                            </View>
                            <View style={styles.contact}>
                                <Icon name="logo-dribbble" size={30} />
                                <Text onPress={() => Linking.openURL('https://dribbble.com/awaqo')} style={{ fontFamily: 'PoppinsReg', marginLeft: 10 }}>Dribbble</Text>
                            </View>
                            <View style={styles.contact}>
                                <Icon2 name="behance" size={25} />
                                <Text onPress={() => Linking.openURL('https://www.behance.net/aqiljawada603b')} style={{ fontFamily: 'PoppinsReg', marginLeft: 10 }}>Behance</Text>
                            </View>
                            <View style={styles.contact}>
                                <Icon name="ios-mail" size={30} />
                                <Text style={{ fontFamily: 'PoppinsReg', marginLeft: 10 }}>aqiljawadalfurqon@gmail.com</Text>
                            </View>
                        </View>
                    </View>
                </Modal>
                {/* bariq */}
                <Modal
                    animationType='slide'
                    transparent
                    visible={this.state.baroq}
                    onRequestClose={() => { this.setState({ baroq: !this.state.baroq }); }}>
                    <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)', justifyContent: 'center' }}>
                        <View style={{ width: '90%', height: 420, backgroundColor: '#FFF', alignSelf: 'center', paddingVertical: 20 }}>
                            <View>
                                <TouchableOpacity style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} onPress={this._baroq}>
                                    <Icon color={'#EB5757'} size={40} name="ios-arrow-round-back" />
                                    <Text style={{ fontFamily: 'PoppinsSemiBold', color: '#3a3a3a', fontSize: 18, marginLeft: 10, marginTop: 5 }}>Kontak</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.contact}>
                                <Icon name="logo-instagram" size={30} />
                                <Text onPress={() => Linking.openURL('https://www.instagram.com/alfariz.barq/')} style={{ fontFamily: 'PoppinsReg', marginLeft: 10 }}>Instagram</Text>
                            </View>
                            <View style={styles.contact}>
                                <Icon name="logo-linkedin" size={30} />
                                <Text onPress={() => Linking.openURL('https://www.linkedin.com/in/bariqalfariz/')} style={{ fontFamily: 'PoppinsReg', marginLeft: 10 }}>LinkedIn</Text>
                            </View>
                            <View style={styles.contact}>
                                <Icon name="logo-github" size={30} />
                                <Text onPress={() => Linking.openURL('https://github.com/bariqalfariz')} style={{ fontFamily: 'PoppinsReg', marginLeft: 10 }}>Github</Text>
                            </View>
                            <View style={styles.contact}>
                                <Icon name="logo-dribbble" size={30} />
                                <Text onPress={() => Linking.openURL('https://dribbble.com/bariqalfariz')} style={{ fontFamily: 'PoppinsReg', marginLeft: 10 }}>Dribbble</Text>
                            </View>
                            <View style={styles.contact}>
                                <Icon2 name="behance" size={25} />
                                <Text onPress={() => Linking.openURL('https://www.behance.net/bariqalfarfc9d')} style={{ fontFamily: 'PoppinsReg', marginLeft: 10 }}>Behance</Text>
                            </View>
                            <View style={styles.contact}>
                                <Icon name="ios-mail" size={30} />
                                <Text style={{ fontFamily: 'PoppinsReg', marginLeft: 10 }}>bariqalfariz09@gmail.com</Text>
                            </View>
                        </View>
                    </View>
                </Modal>
                {/* end */}

                <View style={styles.content}>
                    <View style={styles.textbola}>
                        <Text style={{ fontFamily: 'PoppinsReg', color: '#3a3a3a' }}>Parva Pila adalah aplikasi e-book yang berisi tentang materi - materi olahraga seputar bola kecil.</Text>
                        <Text></Text>
                        <Text style={{ fontFamily: 'PoppinsReg', color: '#3a3a3a' }}>Materi yang ada di dalam aplikasi Parva Pila berbasis teks, gambar, dan video. Jadi, untuk kalian yang ingin belajar teknik atau cara bermain namun kurang bisa memahami maksud dari teorinya, kalian bisa melihat gambar ataupun videonya.</Text>
                        <Text></Text>
                        <Text style={{ fontFamily: 'PoppinsReg', color: '#3a3a3a' }}>Tak hanya materi, Aplikasi Parva Pila juga dilengkapi dengan adanya fitur Quiz dan Ujian untuk menguji kemampuan pengguna.</Text>
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
                            <Text style={styles.nama} onPress={this._afrizal}>Afrizal Fajar Barokah</Text>
                            <Text style={styles.tugas}>Content Writer</Text>
                        </View>
                    </View>
                    <View style={styles.person}>
                        <View style={styles.img}>
                            <Image style={styles.foto} source={april} />
                        </View>
                        <View style={styles.textcont}>
                            <Text style={styles.nama} onPress={this._april}>Apriliya Ardiyanto</Text>
                            <Text style={styles.tugas}>Content Writer</Text>
                        </View>
                    </View>
                    <View style={styles.person}>
                        <View style={styles.img}>
                            <Image style={styles.foto} source={aqil} />
                        </View>
                        <View style={styles.textcont}>
                            <Text style={styles.nama} onPress={this._aqil}>Aqil Jawadal Furqon</Text>
                            <Text style={styles.tugas}>Developer</Text>
                        </View>
                    </View>
                    <View style={styles.person}>
                        <View style={styles.img}>
                            <Image style={styles.foto} source={baroq} />
                        </View>
                        <View style={styles.textcont}>
                            <Text style={styles.nama} onPress={this._baroq}>Bariq Alfariz Arunha</Text>
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
        marginBottom: 25,
        marginTop: 10
    },
    contact: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
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