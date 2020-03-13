import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';

import bg from './img/tenislapanganmateri.jpg';
import pegangRaket from './img/pegangrakettenislap.jpg';
import terimaServis from './img/terimaservtenislap.jpg';
import chop from './img/choptenislap.jpg';
import forehand from './img/forehandtenislap.jpg';
import backhand from './img/backhandtenislap.jpg';
import voli from './img/volitenislap.jpg';
import servis from './img/servistenislap.jpg';
import overhead from './img/overheadtenislap.jpg';
import lapangan from './img/lapangantenislap.png';

import I18n from '../../i18n/i18n';

class Tenislapangan extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <View style={styles.materiHeader}>
                        <Image style={styles.imgMateri} source={bg} />
                        <Text style={styles.materiTitle}>Tenis Lapangan</Text>
                    </View>
                    <View style={styles.materiContainer}>
                        {/* sejarah start */}
                        <Text style={styles.materiSubtitle}>{I18n.t("titleSejarah")}</Text>
                        <Text style={styles.materiContent}>{I18n.t("tenislapanganSejarah")}</Text>
                        {/* sejarah end */}

                        {/* teknik bermain start */}
                        <Text style={styles.materiSubtitle}>{I18n.t("titleTeknikBermain")}</Text>

                        {/* memegang raket */}
                        <Text style={styles.materiSubtitle1}>{I18n.t("sub1tenislapanganTB")}</Text>
                        <Image style={{ width: '100%', height: 206, }} source={pegangRaket} />
                        <Text style={styles.materiContentSub}>{I18n.t("sub1tenislapanganTBContent1")}</Text>

                        {/* menerima servis */}
                        <Text style={styles.materiSubtitle1}>{I18n.t("sub2tenislapanganTB2")}</Text>
                        <Image style={{ width: '100%', height: 200, }} source={terimaServis} />
                        <Text style={styles.materiContentSub}>{I18n.t("sub2tenislapanganTBContent2")}</Text>

                        {/* teknik pukulan */}
                        <Text style={styles.materiSubtitle1}>{I18n.t("sub3tenislapanganTB3")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("TeknikPukulan")}</Text>

                        <Text style={styles.materiSubtitle1sub}>{I18n.t("PukulanChop")}</Text>
                        <Image style={{ width: '100%', height: 610, }} source={chop} />
                        <Text style={styles.materiContentSub}>{I18n.t("PukulanChopContent")}</Text>

                        <Text style={styles.materiSubtitle1sub}>{I18n.t("ForehandDrive")}</Text>
                        <Image style={{ width: '100%', height: 550, }} source={forehand} />
                        <Text style={styles.materiContentSub}>{I18n.t("ForehandDriveContent")}</Text>

                        <Text style={styles.materiSubtitle1sub}>{I18n.t("BackhandDrive")}</Text>
                        <Image style={{ width: '100%', height: 550, }} source={backhand} />
                        <Text style={styles.materiContentSub}>{I18n.t("BackhandDriveContent")}</Text>

                        <Text style={styles.materiSubtitle1sub}>{I18n.t("PukulanVoli")}</Text>
                        <Image style={{ width: '100%', height: 570, }} source={voli} />
                        <Text style={styles.materiContentSub}>{I18n.t("PukulanVoliContent")}</Text>

                        <Text style={styles.materiSubtitle1sub}>{I18n.t("Servis")}</Text>
                        <Image style={{ width: '100%', height: 300, }} source={servis} />
                        <Text style={styles.materiContentSub}>{I18n.t("ServisContent")}</Text>

                        <Text style={styles.materiSubtitle1sub}>{I18n.t("PukulanOverheadSmash")}</Text>
                        <Image style={{ width: '100%', height: 600, }} source={overhead} />
                        <Text style={styles.materiContentSub}>{I18n.t("PukulanOverheadSmashContent")}</Text>

                        <Text style={styles.materiSubtitle1sub}>{I18n.t("PukulanLob")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("PukulanLobContent")}</Text>
                        {/* teknik bermain end */}

                        {/* cara bermain start */}
                        <Text style={styles.materiSubtitle}>{I18n.t("titleCaraBermain")}</Text>
                        {/* video */}
                        <View style={{ width: '100%', height: 300, backgroundColor: '#333' }}>
                            <WebView
                                style={styles.WebViewStyle}
                                source={{ uri: 'https://www.youtube.com/embed/UrixYZoBK8A' }}
                                javaScriptEnabled={true}
                                domStorageEnabled={true}
                                allowsFullscreenVideo={true}
                            />
                        </View>
                        {/* cara bermain end */}

                        {/* lapangan */}
                        <Text style={styles.materiSubtitle}>{I18n.t("titleLapangan")}</Text>
                        <Image style={{ width: '100%', height: 550, }} source={lapangan} />
                        <Text style={styles.materiSubtitle1}>{I18n.t("LapanganTenisLapangan")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("LapanganTenisLapanganContent")}</Text>
                        <Text style={styles.materiSubtitle1}>{I18n.t("Raket")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("RaketContent")}</Text>
                        <Text style={styles.materiSubtitle1}>{I18n.t("Bola")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("BolaContent")}</Text>
                        <Text style={styles.materiSubtitle1}>{I18n.t("Pakaian")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("PakaianContent")}</Text>
                        <Text style={styles.materiSubtitle1}>{I18n.t("Net")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("NetContent")}</Text>

                    </View>
                    <View style={styles.materiContainer}>

                    </View>
                </ScrollView>

                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <Icon name="ios-arrow-round-back" size={35} color={'#3A3A3A'} />
                            <Text style={styles.backText}>  Kembali</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    materiHeader: {
        height: 233,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        shadowColor: "#5C96CC",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 15,
    },
    imgMateri: {
        zIndex: 0,
        position: 'absolute',
        height: 233,
        width: '100%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    materiTitle: {
        marginLeft: 20,
        marginTop: 170,
        fontSize: 24,
        fontFamily: 'PoppinsBold',
        color: '#fff',
    },
    materiSubtitle: {
        textAlign: 'left',
        marginTop: 20,
        fontSize: 18,
        fontFamily: 'PoppinsBold',
        color: '#4F4F4F',
    },
    materiSubtitle1: {
        textAlign: 'left',
        fontSize: 16,
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
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#fff',
        paddingRight: 24,
        paddingLeft: 24,
        borderTopWidth: 4,
        borderTopColor: '#e9e9e9',
    },
    backText: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 15,
        color: '#3A3A3A'
    },
});

export default Tenislapangan;