import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Alert, Dimensions, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Animbutton from '../../component/animbutton';
import RadioButton from '../../component/RadioButton';

const { width, height } = Dimensions.get('window')
let arrnew = []
const jsonData = {
    "quiz": {
        "quiz1": {
            "question1": {
                "correctoption": "option1",
                "options": {
                    "option1": "a. Chicago,Amerika",
                    "option2": "b. New york, Amerika",
                    "option3": "c. Bangkok, Thailand",
                    "option4": "d. Kuala lumpur, Malaysia",
                    "option5": "e.Jakarta, Indonesia"
                },
                "question": "Dari manakah permainan Softball berasal?"
            },
            "question2": {
                "correctoption": "option1",
                "options": {
                    "option1": "a. 8 orang",
                    "option2": "b. 7 orang",
                    "option3": "c. 11 orang",
                    "option4": "d. 10 orang",
                    "option5": "e. 9 orang",
                },
                "question": "Berapakah jumlah orang di setiap tim dalam permainan softball?"
            },
            "question3": {
                "correctoption": "option1",
                "options": {
                    "option1": "a. bola datar",
                    "option2": "b. bola lambung",
                    "option3": "c. bola menggelinding",
                    "option4": "d. ground bola",
                    "option5": "e. bola membelok",
                },
                "question": "Posisi badan saat melakukan teknik yang satu ini adalah ditempatkan tepat di mana bola akan jatuh. Bola tersebut kemudian ditangkap dengan satu tangan atau dua tangan secara bersamaan. Pernytaan tersebut merupakan teknik menangkap bola jenis"
            },
            "question4": {
                "correctoption": "option1",
                "options": {
                    "option1": "a. pukulan tumbuk",
                    "option2": "b. pukulan awalan",
                    "option3": "c. pukulan akhiran",
                    "option4": "d. pukulan belakang",
                    "option5": "e. pukulan depan",
                },
                "question": "Memukul bola tanpa harus mengayunkan pemukul tetapi cukup menahan arah datangnya bola sehingga bola akan jatuh dekat dengan si pemukul merupakan pengertian dari"
            },
            "question5": {
                "correctoption": "option1",
                "options": {
                    "option1": "a. 29-30",
                    "option2": "b. 50-55",
                    "option3": "c. 28-30",
                    "option4": "d. 40-45",
                    "option5": "e. 33-38"
                },
                "question": "berapakah diameter bola softball"
            }
        }
    }
}

export default class Quizsoftball extends React.Component {
    constructor(props) {
        super(props);
        this.qno = 0
        this.score = 0,
        this.jawab = 0,
        this.salah = 0

        const jdata = jsonData.quiz.quiz1
        arrnew = Object.keys(jdata).map(function (k) { return jdata[k] });
        this.state = {
            modalVisible: false,
            question: arrnew[this.qno].question,
            options: arrnew[this.qno].options,
            correctoption: arrnew[this.qno].correctoption,
            countCheck: 0,
            modalQuiz: false
        };
    }
    _backModal = () => {
        this.setState({ modalVisible: !this.state.modalVisible });
    };
    _backModalQuiz = () => {
        this.setState({ modalQuiz: !this.state.modalQuiz });
    };

    _prev = () => {
        if (this.qno > 0) {
            this.qno--
            this.setState({ question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption: arrnew[this.qno].correctoption })
        }
    };

    _next = () => {
        if (this.qno < arrnew.length - 1) {
            this.qno++
            this.setState({ countCheck: 0, question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption: arrnew[this.qno].correctoption })
        } else {
            this.setState({ modalQuiz: !this.state.modalQuiz })
        }
    };
    _finishQuiz = () => {
        this.props.quizFinish(this.score*4, this.jawab, this.salah)
    }

    _answer = (status, ans) => {

        if (status == true) {
            const count = this.state.countCheck + 1
            this.setState({ countCheck: count })
            if (ans == this.state.correctoption) {
                this.score += 5,
                this.jawab += 1
            } else {
                this.salah += 1
            } 
        }
    };

    _change = (status) => {
        if(status == true) {
            this.OnColor
        } else {
            this.OffColor
        }
    }

    render() {
        let _this = this
        const currentOptions = this.state.options
        const options = Object.keys(currentOptions).map(function (k) {
            return (<View key={k} style={{ margin: 10 }}>
                <Animbutton countCheck={_this.state.countCheck} onColor={"#2196f3"} offColor={"#eaeaea"} _onPress={(status) => _this._answer(status, k)} text={currentOptions[k]} />
            </View>)
        });
        return (
            <ScrollView style={styles.container}>
                <Modal
                    transparent
                    visible={this.state.modalQuiz}
                    onRequestClose={() => {this.setState({ modalQuiz: !this.state.modalQuiz });}}>
                    <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center',backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                        <View style={{width: 300,height: 200,backgroundColor: '#FFF',paddingBottom: 32,paddingTop: 32,paddingLeft: 25,paddingRight: 25}}>
                            <View style={{ marginTop: 20, marginBottom: 20, alignItems: 'center' }}>
                                <Text style={{ fontSize: 14, fontFamily: 'PoppinsReg' }}>Pastikan semua jawaban sudah benar, good luck!!</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity style={{ borderRadius: 5, backgroundColor: '#3aa2fc', width: 100, height: 50, alignItems: 'center', justifyContent: 'center' }} onPress={this._backModalQuiz}>
                                    <Text style={styles.btnText}>Kembali</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.btnBack, { backgroundColor: '#fc3a3a' }]} onPress={this._finishQuiz}>
                                    <Text style={styles.btnText}>Kirim</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

                <View style={styles.quizContainer}>
                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: "space-between", alignItems: 'center', }}>
                        <Text style={{marginTop: 30}}>{this.qno+1}/5</Text>
                        <View style={styles.pertanyaanContainer}>
                            <Text style={styles.textpertanyaan}>{this.state.question}</Text>
                        </View>
                        <View style={{width: 300}}>{options}</View>
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btnBack} onPress={() => this._prev()}>
                            <Text style={styles.btnText}>Sebelumnya</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnNext} onPress={() => this._next()}>
                            <Text style={styles.btnText}>Selanjutnya</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    quizContainer: {
        flex: 1,
        alignItems: 'center',
        width: '100%'
    },
    header: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        shadowColor: '#a6bae0',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
    },
    back: {
        position: 'absolute',
        left: 10,
        top: 13,
        width: 50,
        height: 50
    },
    textheader: {
        fontFamily: 'PoppinsReg',
        fontSize: 16
    },
    pertanyaanContainer: {
        width: '100%',
        minHeight: 100,
        maxHeight: 250,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    textpertanyaan: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 18,
        color: '#4F4F4F'
    },
    jawabanContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
    },
    textjawaban: {
        fontFamily: 'PoppinsReg',
        fontSize: 16,
        color: '#4F4F4F'
    },
    btnContainer: {
        width: '100%',
        height: 80,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 15
    },
    btnNext: {
        width: 125,
        height: 50,
        backgroundColor: '#2196f3',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    btnBack: {
        width: 125,
        height: 50,
        backgroundColor: '#c4c4c4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    btnText: {
        fontFamily: 'PoppinsReg',
        fontSize: 14,
        color: '#fff'
    },
})