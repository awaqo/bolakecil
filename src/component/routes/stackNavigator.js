import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Splash from '../splashScreen';

// screen materi
import MenuMateri from '../materi/menuMateriScreen';
import MateriSoftball from '../materi/softball';
import MateriTenisLap from '../materi/tenislapangan';
import MateriBulutangkis from '../materi/bulutangkis';
import MateriKasti from '../materi/kasti';
import MateriTenisMeja from '../materi/tenismeja';

// screen laihan
import MenuLatihan from '../latihan/menuLatihanScreen';
// screen exam
import Exam from '../latihan/exam/exam';
import Result from '../latihan/exam/result';

// screen quiz
import Quizsoftball from '../latihan/quizz/softball/quizsoftball';
// result quiz
import Playquizsoftball from '../latihan/scorequiz/scoresoftball';

import Quiz from '../latihan/quizscreen/quiz';
import Ujian from '../latihan/ujian';

// screen profil
import MenuProfil from '../profil/profilScreen';

const Splashscreen = createStackNavigator({
    Splash: { screen: Splash, navigationOptions: { headerShown: false }}
})

const MateriStack = createStackNavigator({
    MateriScreen: { screen: MenuMateri, navigationOptions: { headerShown: false } },
    SoftballScreen: { screen: MateriSoftball, navigationOptions: { headerShown: false } },
    TenisLapScreen: { screen: MateriTenisLap, navigationOptions: { headerShown: false } },
    BulutangkisScreen: { screen: MateriBulutangkis, navigationOptions: { headerShown: false } },
    KastiScreen: { screen: MateriKasti, navigationOptions: { headerShown: false } },
    TenisMejaScreen: { screen: MateriTenisMeja, navigationOptions: { headerShown: false } },
}, { initialRouteName: 'MateriScreen' });

MateriStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
  };

const LatihanStack = createStackNavigator({
    LatihanScreen: { screen: MenuLatihan, navigationOptions: { headerShown: false } }, //menu latihan
    // screen Exam
    Result: { screen: Result, navigationOptions: { headerShown: false }},
    Exam: { screen: Exam, navigationOptions: { headerShown: false }},

    //screen Quiz softball
    Playquizsoftball: { screen: Playquizsoftball, navigationOptions: { headerShown: false } },
    Quizsoftball: { screen: Quizsoftball, navigationOptions: { headerShown: false } },

    Quiz: { screen: Quiz, navigationOptions: { headerShown: false } },
    Ujian: { screen: Ujian, navigationOptions: { headerShown: false } },

    //screen Quiz tenis meja
    //screen Quiz tenis lapangan
    //screen Quiz kasti
    //screen Quiz bulutangkis
});

LatihanStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
  };

const ProfilStack = createStackNavigator({
    MenuProfil: { screen: MenuProfil, navigationOptions: { headerShown: false } }
});

ProfilStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
  };

const BottomStack = createBottomTabNavigator({
    Materi: {
        screen: MateriStack,
        navigationOptions: {
            tabBarLabel: 'Materi',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon style={{ position: 'absolute', left: 15, bottom: -15 }} name={focused ? 'circle' : 'book'} color={focused ? tintColor : 'transparent' } size={15} />
            ),
            tabBarOptions: {
                activeTintColor: '#EB5757',
                labelStyle: {
                    fontSize: 14,
                    fontFamily: 'PoppinsReg'
                },
                style: {
                    borderLeftWidth: 0.2,
                    borderBottomWidth: 0,
                    borderTopWidth: 2,
                    borderTopColor: '#EB5757',
                    borderWidth: 0.5,
                    borderColor: '#EB5757',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    backgroundColor: "#fff",
                    position: 'absolute',
                    height: 60,
                    bottom: 0,
                    left: 0,
                    padding: 15,
                    paddingBottom: 15,
                }
            },
        }
    },

    Latihan: {
        screen: LatihanStack,
        navigationOptions: {
            tabBarLabel: 'Latihan',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon style={{ position: 'absolute', left: 13, bottom: -15 }} name={focused ? 'circle' : 'book'} color={focused ? tintColor : 'transparent' } size={15} />
            ),
            tabBarOptions: {
                showIcon: true,
                activeTintColor: '#EB5757',
                labelStyle: {
                    fontSize: 14,
                    fontFamily: 'PoppinsReg'
                },
                style: {
                    borderLeftWidth: 0.2,
                    borderBottomWidth: 0,
                    borderTopWidth: 2,
                    borderTopColor: '#EB5757',
                    borderWidth: 0.5,
                    borderColor: '#EB5757',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    backgroundColor: "#fff",
                    position: 'absolute',
                    height: 60,
                    bottom: 0,
                    left: 0,
                    padding: 15,
                    paddingBottom: 15,
                }
            },
        }
    },

    Profil: {
        screen: ProfilStack,
        navigationOptions: {
            tabBarLabel: 'Profil',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon style={{ position: 'absolute', left: 18, bottom: -15 }} name={focused ? 'circle' : 'book'} color={focused ? tintColor : 'transparent' } size={15} />
            ),
            tabBarOptions: {
                activeTintColor: '#EB5757',
                labelStyle: {
                    fontSize: 14,
                    fontFamily: 'PoppinsReg'
                },
                style: {
                    borderLeftWidth: 0.2,
                    borderBottomWidth: 0,
                    borderTopWidth: 2,
                    borderTopColor: '#EB5757',
                    borderWidth: 0.5,
                    borderColor: '#EB5757',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    backgroundColor: "#fff",
                    position: 'absolute',
                    height: 60,
                    bottom: 0,
                    left: 0,
                    padding: 15,
                    paddingBottom: 15,
                }
            },
        }
    },
});

export default createAppContainer(BottomStack);