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
import bg from './img/detailbulutangkis.png';
import lapangan from './img/lapbulutangkis.png';
import I18n from '../../i18n/i18n';

class Bulutangkis extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <View style={styles.materiHeader}>
                        <Image style={{ zIndex: 0, position: 'absolute', width: '100%', }} source={bg} />
                        <Text style={styles.materiTitle}>Bulutangkis</Text>
                    </View>
                    <View style={styles.materiContainer}>
                        {/* sejarah start */}
                        <Text style={styles.materiSubtitle}>{I18n.t("titleSejarah")}</Text>
                        <Text style={styles.materiContent}>{I18n.t("bulutangkisSejarah")}</Text>
                        {/* sejarah end */}
                    </View>
                    <View style={styles.materiContainer}>
                        {/* teknik bermain start */}
                        <Text style={styles.materiSubtitle}>{I18n.t("titleTeknikBermain")}</Text>
                        <Text style={styles.materiSubtitle1}>{I18n.t("sub1TeknikBermain")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("content1TB")}</Text>

                        <Text style={styles.materiSubtitle1sub}>{I18n.t("sub1TB1")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("sub1TBContent1")}</Text>

                        <Text style={styles.materiSubtitle1sub}>{I18n.t("sub1TB2")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("sub1TBContent2")}</Text>

                        <Text style={styles.materiSubtitle1sub}>{I18n.t("sub1TB3")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("sub1TBContent3")}</Text>

                        <Text style={styles.materiSubtitle1}>{I18n.t("sub2TeknikBermain")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("content2TB")}</Text>

                        <Text style={styles.materiSubtitle1sub}>{I18n.t("servis")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("servisContent")}</Text>
                        <Text style={styles.materiSubtitle1sub}>{I18n.t("pukulanservis")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("pukulanservisContent")}</Text>
                        <Text style={styles.materiSubtitle1sub}>{I18n.t("serviscambuk")}</Text>
                        <Text style={styles.materiSubtitle1sub}>{I18n.t("servispanjang")}</Text>
                        <Text style={styles.materiSubtitle1sub}>{I18n.t("servispendek")}</Text>
                        <Text style={styles.materiSubtitle1sub}>{I18n.t("servisdatar")}</Text>

                        <Text style={styles.materiSubtitle1sub}>{I18n.t("lob")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("lobContent")}</Text>
                        <Text style={styles.materiContentLob}>{I18n.t("lobContent1")}</Text>
                        <Text style={styles.materiContentLob}>{I18n.t("lobContent2")}</Text>
                        {/* teknik bermain end */}

                        {/* cara bermain start */}
                        <Text style={styles.materiSubtitle}>{I18n.t("titleCaraBermain")}</Text>
                        {/* video */}
                        <View style={{ width: '100%', height: 300 }}>
                            <WebView
                                style={styles.WebViewStyle}
                                source={{ uri: 'https://www.youtube.com/embed/7SV7w69Rfbs' }}
                                javaScriptEnabled={true}
                                domStorageEnabled={true}
                                allowsFullscreenVideo={true}
                            />
                        </View>
                        {/* cara bermain end */}

                        {/* lapangan start */}
                        <Text style={styles.materiSubtitle}>{I18n.t("titleLapangan")}</Text>
                        <Image style={{ width: '100%', height: 233, }} source={lapangan} />
                        <Text style={styles.materiContentSub}>{I18n.t("content1CB")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("tinggi")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("panjang")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("lebar")}</Text>
                        {/* lapangan end */}
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
    materiContentLob: {
        textAlign: 'justify',
        marginTop: 5,
        fontFamily: 'PoppinsReg',
        fontSize: 12,
        color: '#4F4F4F',
        lineHeight: 18,
        marginLeft: 30
    },
    materiContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginRight: 25,
        marginLeft: 25,
        marginBottom: 20,
    },
    WebViewStyle: {
        marginTop: 10,
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
        color: '#3A3A3A',
    },
    soalText: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 15,
        color: '#E23636',
    },
});

export default Bulutangkis;