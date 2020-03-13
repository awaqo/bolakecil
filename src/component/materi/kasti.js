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
import bg from './img/kastimateri.jpg';
import I18n from '../../i18n/i18n';

class Kasti extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <View style={styles.materiHeader}>
                        <Image style={styles.imgMateri} source={bg} />
                        <Text style={styles.materiTitle}>Kasti</Text>
                    </View>
                    <View style={styles.materiContainer}>
                        {/* sejarah start */}
                        <Text style={styles.materiSubtitle}>{I18n.t("titleSejarah")}</Text>
                        <Text style={styles.materiContent}>{I18n.t("materisejarah")}</Text>
                        {/* sejarah end */}
                    </View>
                    <View style={styles.materiContainer}>
                        {/* teknik bermain start */}
                        <Text style={styles.materiSubtitle}>{I18n.t("titleTeknikBermain")}</Text>

                        <Text style={styles.materiSubtitle1}>{I18n.t("judulteknikmelemparbola")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("materiteknikbermain")}</Text>

                        <Text style={styles.materiSubtitle1}>{I18n.t("judulteknikmenangkapbola")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("materiteknikmenangkapbola")}</Text>

                        <Text style={styles.materiSubtitle1}>{I18n.t("judulmelambungkanbola")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("sub1TBContent2")}</Text>

                        <Text style={styles.materiSubtitle1}>{I18n.t("judulmemukukbola")}</Text>
                        <Text style={styles.materiContentSub}>{I18n.t("materimemukulbola")}</Text>
                        <Text style={styles.materiSubtitle}>{I18n.t("titleCaraBermain")}</Text>
                        {/* video */}
                        <View style={{ width: '100%', height: 300 }}>
                            <WebView
                                style={styles.WebViewStyle}
                                source={{ uri: 'https://www.youtube.com/embed/8J-tIdKRPrU' }}
                                javaScriptEnabled={true}
                                domStorageEnabled={true}
                                allowsFullscreenVideo={true}
                            />
                        </View>
                        {/* cara bermain end */}
                        {/* lapangan start */}
                        <Text style={styles.materiSubtitle}>{I18n.t("titleLapangan")}</Text>
                        <Image style={{ width: '100%', height: 370, marginTop: 10 }} source={{uri: 'data:image/jpeg;base64,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'}} />
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

export default Kasti;