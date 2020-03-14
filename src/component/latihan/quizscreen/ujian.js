import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Picker,
  AsyncStorage
 
} from 'react-native';
 
import Question from './component/question'
import Button from 'react-native-button';
// import AsyncStorage from '@react-native-community/async-storage';
 
export default class Ujian extends React.Component {
     
  goToHome = () => this.props.navigation.navigate('Latihan');
 
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      questions: [],
      Nilai:'',
      current: 0,
      correctScore: 5,
      totalScore: 50,
 
      results: {
        score: 0,
        correctAnswers: 0
      },
      completed: false
    };
  }
 
  fetchQuestions = async () => {
    await this.setState({ loading: true });
    const response = await fetch(
      'http://ec2-3-86-96-130.compute-1.amazonaws.com/api/exam2'
    );
    const questions = await response.json();
 
    const  results  = questions;
 
    results.forEach(item => {
      item.id = Math.floor(Math.random() * 10000);
    });
 
    await this.setState({ questions: results, loading: false });
  };
 
  reset = () => {
    this.setState(
      {
        questions: [],
        current: 0,
        results: {
          score: 0,
          correctAnswers: 0
        },
        completed: false
      },
      () => {
        this.fetchQuestions();
      }
    );
  };
 
  _Home = () => {
    this.props.navigation.goBack()
  };
 
  submitAnswer = (index, answer) => {
    const question = this.state.questions[index];
    const isCorrect = question.correct_answer === answer;
    const results = { ...this.state.results };
 
    results.score = isCorrect ? results.score + 10 : results.score;
    results.correctAnswers = isCorrect
      ? results.correctAnswers + 1
      : results.correctAnswers;
       
     
 
    this.setState({
      current: index + 1,
      results,
      completed: index === 9 ? true : false
    });
  };
 
  componentDidMount() {
    this.fetchQuestions();
  }
 
  render() {
   
    return (
      <View style={styles.container}>
        {!!this.state.loading && (
          <View style={styles.loadingQuestions}>
            <ActivityIndicator size="large" color="#3aa2fc" />
            <Text>Sabar, kamu pasti sukses !</Text>
          </View>
        )}
 
        {!!this.state.questions.length > 0 &&
          this.state.completed === false && (
            <Question
              onSelect={answer => {
                this.submitAnswer(this.state.current, answer);
              }}
              question={this.state.questions[this.state.current]}
              correctPosition={Math.floor(Math.random() * 3)}
              current={this.state.current}
            />
          )}
 
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          {this.state.completed === true && (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 25, fontFamily: 'PoppinsSemiBold' }}>Quiz Selesai</Text>
            <Text style={{ fontFamily: 'PoppinsReg', fontSize: 18 }}>Nilaimu</Text>
            <Text style={{ fontSize: 64, fontFamily: 'PoppinsSemiBold' }}>{this.state.results.score}</Text>
            <Text style={{ fontFamily: 'PoppinsReg', fontSize: 16 }}>Jawaban benar : {this.state.results.correctAnswers}</Text>
            <Text style={{ fontFamily: 'PoppinsReg', fontSize: 16, marginTop: 5 }}>Jawaban salah : {10 - this.state.results.correctAnswers}</Text>
            <Button
              containerStyle={styles.loginContainer}
              style={styles.loginText}
              onPress={this.reset}
            >
              <Text style={{ color: '#fff', fontFamily: 'PoppinsSemiBold', fontSize: 16, textAlign: 'center' }}>Ulangi</Text>
            </Button>
            <Button
              containerStyle={styles.exit}
              onPress={this._Home}
            >
              <Text style={{ color: '#fff', fontFamily: 'PoppinsSemiBold', fontSize: 16, textAlign: 'center' }}>Keluar</Text>
            </Button>
          </View>
          )}
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%'
  },
  loginContainer: {
    backgroundColor: '#3aa2fc',
    alignSelf: 'center',
    borderRadius: 10,
    width: 200,
    height: 55,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  exit: {
    backgroundColor: '#EB5757',
    alignSelf: 'center',
    borderRadius: 10,
    width: 200,
    height: 55,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadingQuestions: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginText: {
    color: '#fff',
    fontFamily:'PoppinsReg'
  },
});