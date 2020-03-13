import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Modal, StatusBar } from 'react-native';
import firebase from 'firebase';
import LogoTS from './img/logo1.png'
import Icon from 'react-native-vector-icons/Ionicons';

// modal
import Sumber from './sumber/sumber';
import Tentang from './tentang/tentang';

class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sumber: false,
            tentang: false
        }
    }

    readUserData() {
        firebase.database().ref('users/').on('value', function (snapshot) {
            console.log(snapshot.val())
        });
    }

    _modalsumber = () => {
        this.setState({ sumber: !this.state.sumber });
    }

    _modaltentang = () => {
        this.setState({ tentang: !this.state.tentang });
    }

    render() {
        return (
            <View style={{ backgroundColor: '#fff', flex: 1, width: '100%' }}>
                {/* modal start */}
                <Modal
                    animationType='slide'
                    transparent
                    visible={this.state.sumber}
                    onRequestClose={() => { this.setState({ sumber: !this.state.sumber }); }}>
                    <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                        <View style={{ width: '100%', height: '100%', backgroundColor: '#FFF' }}>
                            <View style={styles.sumberheader}>
                                <TouchableOpacity onPress={this._modalsumber}>
                                    <Icon color={'#3a3a3a'} size={40} name="ios-arrow-round-back" />
                                </TouchableOpacity>
                                <Text style={styles.h1}>Sumber</Text>
                            </View>
                            {/* tampilan */}
                            <Sumber />
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType='slide'
                    transparent
                    visible={this.state.tentang}
                    onRequestClose={() => { this.setState({ tentang: !this.state.tentang }); }}>
                    <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                        <View style={{ width: '100%', height: '100%', backgroundColor: '#FFF' }}>
                            <View style={styles.tentangheader}>
                                <TouchableOpacity onPress={this._modaltentang} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon color={'#3a3a3a'} size={40} name="ios-arrow-round-back" />
                                </TouchableOpacity>
                                <Text style={styles.h1}>Tentang Kami</Text>
                            </View>
                            <Tentang />
                        </View>
                    </View>
                </Modal>

                {/* modal end */}

                <Image style={styles.logo} source={LogoTS} />
                <View style={styles.content}>
                    <TouchableOpacity style={styles.perolehanNilai} onPress={this._modaltentang}>
                        <Text style={styles.textItems}>Tentang</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.perolehanNilai} onPress={this._modalsumber}>
                        <Text style={styles.textItems}>Sumber</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnLogout} onPress={() => firebase.auth().signOut()}>
                        <Text style={styles.textLogout}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 185,
        height: 150,
        marginBottom: 40,
        marginTop: 50,
        alignSelf: 'center'
    },
    content: {
        alignItems: 'center',
    },
    perolehanNilai: {
        width: 320,
        height: 50,
        alignItems: 'baseline',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
        paddingLeft: 20,
        marginBottom: 20,
    },
    textItems: {
        fontFamily: 'PoppinsBold',
        fontSize: 14,
        color: '#3a3a3a'
    },
    btnLogout: {
        width: 320,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EB5757',
        borderRadius: 5,
    },
    textLogout: {
        fontFamily: 'PoppinsBold',
        fontSize: 14,
        color: '#fff'
    },
    sumberheader: {
        width: '100%',
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
        flexDirection: 'row'
    },
    tentangheader: {
        width: '100%',
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
        flexDirection: 'row'
    },
    rect1: {
        position: 'absolute',
        bottom: 0,
        right: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
        width: 70,
        height: 30
    },
    rect2: {
        position: 'absolute',
        bottom: 15,
        right: 120,
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
        width: 25,
        height: 25
    },
    h1: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 20,
        color: '#3a3a3a',
        marginLeft: 20,
        marginTop: 2
    },
    bola: {
        width: 80,
        height: 30,
        backgroundColor: '#fff',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 50
    },
    logo1: {
        fontFamily: 'PoppinsReg',
        fontSize: 14,
        color: '#EB5757'
    },
})

export default ProfileScreen;