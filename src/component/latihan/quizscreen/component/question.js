import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Alert, Image } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import Button from 'react-native-button';
import Modal from 'react-native-modal';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
        // <ImageBackground source={require('../../Home/pictures/Quiz.png')} style={{ width: '100%', height: '100%' }}>
            <View style={{ flex: 1, padding: 12 }}>
                <Text style={{ fontSize: 25, color: '#3aa2fc', fontFamily: 'PoppinsSemiBold', textAlign: 'left', marginTop: '10%' }}>
                    Question {this.props.current + 1} out of 10
                </Text>
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
                    <Text style={{ color: '#FFFFFF', fontFamily: 'PoppinsReg', fontSize: 18 }}>Next</Text>
                </Button>
                <Modal isVisible={this.state.isModalVisible}
                    style={{ width: '30%', height: 20 }}
                    onBackdropPress={() => this.setState({ isVisible: false })}
                    onSwipeComplete={() => this.setState({ isVisible: false })}
                    swipeDirection="left"
                    onRequestClose={this.closeModal}
                >
                    <View style={{ backgroundColor: '#fff', justifyContent: 'center', width: 320, height: 300, alignItems: 'center' }}>
                        {/* <Image source={require('../../Home/pictures/emot.png')} style={{ width: 60, height: 60, bottom: '15%' }} /> */}
                        <Text style={{ textAlign: 'center', bottom: 20, fontFamily: 'PoppinsReg', fontSize: 20 }}>Jawabanmu salah</Text>
                        <Text style={{ fontFamily: 'PoppinsReg', fontSize: 15 }}>{this.state.pembahasan}</Text>
                        <Button
                            containerStyle={styles.next}
                            style={styles.radioText}
                            onPress={this.next}
                        >
                            <Text style={{ textAlign: 'center', color: '#fff', justifyContent: 'center', fontFamily: 'PoppinsReg' }}>Next</Text>
                        </Button>
                    </View>
                </Modal>
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
        borderRadius: 25,
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
});