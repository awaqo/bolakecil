import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Alert, TouchableOpacity } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import Button from 'react-native-button';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons'

export default class Question extends React.Component {
    constructor() {
        super();

        this.state = {
            answer: null,
            pembahasan: '',
            correct_answer: '',
            isModalVisible: false
        };
    }
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    openModal = () => {

        console.log(this.state.correct_answer);
        this.setState({ answer: null });
        if (this.state.answer === null) {
            Alert.alert('Isi jawabanya dulu..')
        } else {

            if (this.state.answer === this.state.correct_answer) {
                this.props.onSelect(this.state.answer);
                this.setState({ answer: null })
            } else {
                this.setState({
                    isModalVisible: true
                });

            }
        }
    }
    closeModal = () => {
        this.setState({
            isModalVisible: false
        })
    }
    next = () => {
        this.setState({
            isModalVisible: false,

        }), this.props.onSelect(this.state.answer);
    }

    renderOptions = question => {
        this.state.correct_answer = question.correct_answer;
        this.state.pembahasan = question.pembahasan;
        if (question.type === "boolean") {
            console.log(question)
            return [
                <RadioButton value={"True"} key={1}>
                    <Text style={styles.radioText}>True</Text>
                </RadioButton>,

                <RadioButton value={"False"} key={2}>
                    <Text style={styles.radioText}>False</Text>
                </RadioButton>
            ];
        }

        else {
            const result = [];
            console.log(question)
            let incorrect = JSON.parse(question.incorrect_answers);

            incorrect.forEach((item, index) => {

                let key = `${question.id}-${index}`;

                if (index === this.props.correctPosition) {

                    let key2 = `${question.id}-100`;
                    result.push(

                        <RadioButton value={question.correct_answer} key={key2} style={{ backgroundColor: '#e7e7e7', borderRadius: 10, marginTop: 15 }}>
                            <Text style={styles.radioText}>{question.correct_answer}</Text>
                        </RadioButton>

                    );
                }

                result.push(
                    <RadioButton value={item} key={key} style={{ backgroundColor: '#e7e7e7', borderRadius: 10, marginTop: 15 }}>
                        <Text style={styles.radioText}>{item}</Text>
                    </RadioButton>
                );
            });

            return result;
        }
    };


    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ padding: 12 }}>
                    <View style={{ width: '100%', height: 50, marginTop: 10 }}>
                        <Text style={{ fontSize: 25, color: '#3aa2fc', fontFamily: 'PoppinsSemiBold', textAlign: 'center', marginTop: 5 }}>Pertanyaan {this.props.current + 1} dari 10</Text>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "#3a3a3a", marginVertical: '8%' }}>
                        {this.props.question.question}
                    </Text>
                    <RadioGroup
                        onSelect={(index, answer) => this.setState({ answer })}
                        selectedIndex={this.state.answer}
                        alignSelf='flex-end'
                        thickness={2}
                        color='#fff'
                        highlightColor='#3aa2fc'
                    >
                        {this.renderOptions(this.props.question)}
                    </RadioGroup>
                    <Button
                        containerStyle={styles.loginContainer}
                        style={styles.loginText}
                        onPress={this.openModal}
                    >
                        <Text style={{ color: '#FFFFFF', fontFamily: 'PoppinsSemiBold', fontSize: 18 }}>Lanjut</Text>
                    </Button>
                    <Modal isVisible={this.state.isModalVisible}
                        onBackdropPress={() => this.setState({ isVisible: false })}
                        onRequestClose={this.closeModal}
                    >
                        <View style={{ backgroundColor: '#fff', justifyContent: 'center', width: '90%', height: 300, alignSelf: 'center', borderRadius: 5 }}>
                            <Text style={{ textAlign: 'center', marginBottom: 15, fontFamily: 'PoppinsSemiBold', fontSize: 20 }}>Jawabanmu salah</Text>
                            <Text style={{ fontFamily: 'PoppinsSemiBold', color: '#3a3a3a', fontSize: 16, textAlign: 'left', paddingHorizontal: 20 }}>Pembahasan : </Text>
                            <Text style={{ fontFamily: 'PoppinsReg', fontSize: 14, paddingHorizontal: 20, textAlign: 'left' }}>{this.state.pembahasan}</Text>
                            <Button
                                containerStyle={styles.next}
                                style={styles.radioText}
                                onPress={this.next}
                            >
                                <Text style={{ textAlign: 'center', color: '#fff', justifyContent: 'center', fontFamily: 'PoppinsReg' }}>Lanjut</Text>
                            </Button>
                        </View>
                    </Modal>
                </View>
            </View>
            // </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    radioText: {
        fontSize: 15,

    },
    loginContainer: {

        backgroundColor: '#3aa2fc',
        alignSelf: 'center',
        borderRadius: 5,
        paddingVertical: 15,
        width: 150,
        height: 50,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    next: {
        backgroundColor: '#3aa2fc',
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: '10%',
        width: 200,
        height: 40,
        justifyContent: 'center'
    },
    back: {
        backgroundColor: '#3aa2fc',
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 10,
        width: 100,
        height: 40,
        justifyContent: 'center'
    },
    exit: {
        backgroundColor: '#EB5757',
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 10,
        width: 100,
        height: 40,
        justifyContent: 'center',
        marginLeft: 20
    },
});