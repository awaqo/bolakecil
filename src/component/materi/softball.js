import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import bg from './img/softballmateri.jpg';
import lapangan from './img/lapsoftball.png';
import I18n from '../../i18n/i18n';

class Softball extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <View style={styles.materiHeader}>
                        <Image style={styles.imgMateri} source={bg} />
                        <Text style={styles.materiTitle}>Softball</Text>
                    </View>
                    <View style={styles.materiContainer}>
                        {/* sejarah */}
                        <Text style={styles.materiSubtitle}>{I18n.t("titleSejarah")}</Text>
                        <Text style={styles.materiContent}>{I18n.t("softballSejarah")}</Text>
                    </View>
                    <View style={styles.materiContainer}>
                        {/* teknik bermain */}
                        <Text style={styles.materiSubtitle}>{I18n.t("titleTeknikBermain")}</Text>
                        {/* melempar bola */}
                        <Text style={styles.materiSubtitle1}>{I18n.t("sub1softbalTB")}</Text>
                        <Text style={styles.materiSubtitle1sub}>{I18n.t("sub1softbalTB1")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("sub1softbalTBContent1")}</Text>

                        <Text style={styles.materiSubtitle1sub}>{I18n.t("sub1softbalTB2")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("sub1softbalTBContent2")}</Text>

                        <Text style={styles.materiSubtitle1sub}>{I18n.t("sub1softbalTB3")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("sub1softbalTBContent3")}</Text>

                        {/* menangkap bola */}
                        <Text style={styles.materiSubtitle1}>{I18n.t("sub2softbalTB")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("content2softbalTB")}</Text>
                        <Text style={styles.materiSubtitle1sub}>{I18n.t("sub2softbalTB1")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("sub2softbalTBContent1")}</Text>

                        <Text style={styles.materiSubtitle1sub}>{I18n.t("sub2softbalTB2")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("sub2softbalTBContent2")}</Text>

                        <Text style={styles.materiSubtitle1sub}>{I18n.t("sub2softbalTB3")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("sub2softbalTBContent3")}</Text>

                        {/* memegang pemukul */}
                        <Text style={styles.materiSubtitle1}>{I18n.t("sub3softbalTB")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("content3softbalTB")}</Text>

                        {/* memukul bola */}
                        <Text style={styles.materiSubtitle1}>{I18n.t("sub4softbalTB")}</Text>
                        <Text style={styles.materiSubtitle1sub}>{I18n.t("sub4softbalTB1")}</Text>
                        <Text style={styles.materiSubtitle1sub}>{I18n.t("sub4softbalTB2")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("content4softbalTB2")}</Text>
                        <Text></Text>
                        <Text style={styles.materiSubtitle1sub}>{I18n.t("sub4softbalTB3")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("content4softbalTB3")}</Text>
                        <Text></Text>
                        <Text style={styles.materiSubtitle1sub}>{I18n.t("sub4softbalTB4")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("content4softbalTB4")}</Text>
                        <Text></Text>
                        <Text style={styles.materiSubtitle1sub}>{I18n.t("sub4softbalTB5")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("content4softbalTB5")}</Text>

                        {/* cara bermain */}
                        <Text style={styles.materiSubtitle}>{I18n.t("titleCaraBermain")}</Text>
                        {/* video */}
                        <View style={{ width: '100%', height: 300 }}>
                            <WebView
                                style={styles.WebViewStyle}
                                source={{ uri: 'https://www.youtube.com/embed/Qs40nO0UvmM' }}
                                javaScriptEnabled={true}
                                domStorageEnabled={true}
                                allowsFullscreenVideo={true}
                            />
                        </View>
                        {/* lapangan */}
                        <Text style={styles.materiSubtitle}>{I18n.t("titleLapangan")}</Text>
                        <Image style={{ width: '100%', height: 300, }} source={lapangan} />

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
        borderTopColor: '#f3f3f3',
    },
    backText: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 15,
        color: '#3A3A3A',
    },
    soalText: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 15,
        color: '#E23636',
    },
});

export default Softball;