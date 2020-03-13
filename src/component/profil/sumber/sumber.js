import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, Modal, Dimensions, Linking  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Sumber extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.card}>
                        <View style={styles.cardheader}>
                            <Text style={styles.cardheadertext}>Tenis Lapangan</Text>
                        </View>
                        <View style={styles.cardcontent}>
                            <Text style={styles.cardcontenttext} 
                            onPress={() => Linking.openURL('https://materibelajar.co.id/tenis-lapangan/')}>materibelajar.co.id/tenis-lapangan/</Text>
                        </View>
                    </View>
                    <View style={styles.hr}></View>
                    <View style={styles.card}>
                        <View style={styles.cardheader}>
                            <Text style={styles.cardheadertext}>Softball</Text>
                        </View>
                        <View style={styles.cardcontent}>
                            <Text style={styles.cardcontenttext}
                            onPress={() => Linking.openURL('https://www.sumberpengertian.id/pengertian-softbal')}>www.sumberpengertian.id/pengertian-softbal</Text>
                        </View>
                    </View>
                    <View style={styles.hr}></View>
                    <View style={styles.card}>
                        <View style={styles.cardheader}>
                            <Text style={styles.cardheadertext}>Tenis Meja</Text>
                        </View>
                        <View style={styles.cardcontent}>
                            <Text style={styles.cardcontenttext} 
                            onPress={() => Linking.openURL('https://materibelajar.co.id/tenis-meja/')}>materibelajar.co.id/tenis-meja/</Text>
                        </View>
                    </View>
                    <View style={styles.hr}></View>
                    <View style={styles.card}>
                        <View style={styles.cardheader}>
                            <Text style={styles.cardheadertext}>Bulutangkis</Text>
                        </View>
                        <View style={styles.cardcontent}>
                            <Text style={styles.cardcontenttext}
                            onPress={() => Linking.openURL('https://materibelajar.co.id/materi-bulu-tangkis/')}>materibelajar.co.id/materi-bulu-tangkis/</Text>
                        </View>
                    </View>
                    <View style={styles.hr}></View>
                    <View style={styles.card}>
                        <View style={styles.cardheader}>
                            <Text style={styles.cardheadertext}>Kasti</Text>
                        </View>
                        <View style={styles.cardcontent}>
                            <Text style={styles.cardcontenttext}
                            onPress={() => Linking.openURL('https://materibelajar.co.id/kasti/')}>materibelajar.co.id/kasti/</Text>
                        </View>
                    </View>
                    <View style={styles.hr}></View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container : {
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
        fontFamily: 'PoppinsSemiBold',
        fontSize: 20,
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
        borderTopLeftRadius: 30,
        padding: 20
    },
    card: {
        width: '100%',
        marginBottom: 10
    },
    cardheader: {
        width: '100%',
        justifyContent: 'center'
    },
    cardheadertext: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 18,
        color: '#3a3a3a'
    },
    cardcontent: {
        width: '100%',
        justifyContent: 'center'
    },
    cardcontenttext: {
        fontFamily: 'PoppinsItalic',
        fontSize: 14,
        color: '#3a3a3a'
    },
    hr: {
        width: '95%',
        height: 0.5,
        backgroundColor: '#8d8d8d',
        marginBottom: 10,
        alignSelf: 'center'
    },
})