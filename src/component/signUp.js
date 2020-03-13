import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput, Image } from 'react-native';
import bg from '../img/background.png';
import logo from '../img/logo1.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import firebase from 'firebase'

class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    error: '',
    name: ''
  }

  onBottomPress = () => {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        Keyboard.dismiss()
        
      )
      .catch(err => {
        this.setState({ error: err.message })
        Alert.alert(this.state.error);
      })

    const db = firebase.app().database()
    db.ref('users').push({
      email: this.state.email,
      name: this.state.name
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.inputEmail} 
          placeholder='Email SignUp' 
          value={this.state.email}
          onChangeText={email => this.setState({email})} />

        <TextInput 
          style={styles.inputEmail} 
          placeholder='Name' 
          value={this.state.name}
          onChangeText={name => this.setState({name})} />

        <TextInput 
          style={styles.inputPassword} 
          placeholder='Password' secureTextEntry
          value={this.state.password}
          onChangeText={password => this.setState({password})} />
        <TouchableOpacity onPressIn={this.onBottomPress} style={styles.btnLogin}>
          <Text style={styles.textLogin}>Masuk</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  selectAvatar: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 12,
    color: '#E23636',
    marginBottom: 20,
    marginTop: 5
  },
  inputEmail: {
    width: 300,
    height: 40,
    paddingLeft: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#a6bae0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    marginBottom: 30,
  },
  inputPassword: {
    width: 300,
    height: 40,
    paddingLeft: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#a6bae0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
  },
  btnLogin: {
    width: 115,
    height: 35,
    backgroundColor: '#E23636',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 5,
  },
  textLogin: {
    color: '#fff',
    fontFamily: 'PoppinsBold',
    fontSize: 12,
  },
})

export default SignUp;