import React, { Component } from 'react';
import { ScrollView, StatusBar, Modal, View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput, Image, Keyboard, TouchableWithoutFeedback, Alert, AsyncStorage } from 'react-native';
import { Content } from 'native-base';
import logo from '../img/loginilus.png';
import ts from '../img/logo-smk-telkompwt.png';
import bk from '../img/logo1.png';
import firebase from 'firebase';

import Loading from './loading';

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
    name: '',
    error: '',
    loading: false,
    modalVisible: false
  }

  _backModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  SignIn = () => {
    if (this.state.email.length < 1 && this.state.name.length < 1 && this.state.password.length < 1) {
      alert("Ada data yang belum diisi");
    } else {
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          alert('Login berhasil. \nAnda masuk dengan data berikut : \nEmail : ' + this.state.email + '\nPassword : ' + this.state.password)
          Keyboard.dismiss()
        })
        .catch(err => {
          this.setState({ error: err.message })
          alert(this.state.error);
        }) .then(() => {
          this.setState({
            email: '',
            password: ''
          })
        })
    }
  }

  onSignUp = () => {
    if (this.state.email.length < 1 && this.state.name.length < 1) {
      alert("Ada data yang belum diisi");
    } else {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        alert('Anda masuk dengan data berikut : \nEmail : ' + this.state.email + '\nPassword : ' + this.state.password)
        Keyboard.dismiss()
        const getEmail = this.state.email
        const email = getEmail.split('@')
        firebase.app().database().ref('users').child(`${email[0]}`).set({
          name: this.state.name,
          password: this.state.password
        })
      })
        .catch(err => {
          this.setState({ error: err.message })
          alert(this.state.error);
        })
    }
  }

  render() {
    return (
      <ScrollView>
        <Modal
          transparent
          visible={this.state.modalVisible}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.6)'
            }}
          >
            <View
              style={{
                width: 300,
                minHeight: 200,
                maxHeight: 500,
                backgroundColor: '#FFF',
                paddingBottom: 32,
                paddingTop: 32,
                paddingLeft: 25,
                paddingRight: 25
              }}
            >
              <Text style={{ fontFamily: 'PoppinsSemiBold', alignSelf: 'center', fontSize: 24 }}>Registrasi</Text>
              <Text style={{ fontFamily: 'PoppinsReg', alignSelf: 'center', textAlign: 'center', marginTop: 5, marginBottom: 20, color: '#a7a7a7' }}>Daftar sekarang juga agar Anda dapat belajar seputar olahraga bola kecil</Text>
              <TextInput
                style={styles.inputEmailReg}
                placeholder='Email'
                keyboardType='email-address'
                autoCapitalize='none'
                value={this.state.email}
                onChangeText={email => this.setState({ email })} />

              <TextInput
                style={styles.inputEmailReg}
                placeholder='Name'
                autoCapitalize='none'
                value={this.state.name}
                onChangeText={name => this.setState({ name })} />

              <TextInput
                style={styles.inputPasswordReg}
                placeholder='Password'
                secureTextEntry
                autoCapitalize='none'
                value={this.state.password}
                onChangeText={password => this.setState({ password })} />
              <TouchableOpacity onPress={this.onSignUp} style={styles.btnRegis}>
                <Text style={styles.textLogin}>Daftar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this._backModal} style={{ alignSelf: 'center', marginTop: 20 }}>
                <Text style={{ fontFamily: 'PoppinsReg' }}>Kembali</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
            <StatusBar backgroundColor="#d2d2d2" barStyle="light-content" />
            <Image style={styles.logotstext} source={ts} />
            <Image style={styles.logotext} source={bk} />
            <Image style={{ marginTop: 60, marginBottom: 10, alignSelf: 'center' }} source={logo} />
            <Text style={{ fontSize: 18, fontFamily: 'PoppinsSemiBold', textAlign: 'center' }}>AYO MASUK</Text>
            <Text style={{ fontSize: 12, fontFamily: 'PoppinsReg', color: 'grey', marginBottom: 40, textAlign: 'center', width: 270, alignSelf: 'center' }}>Beragam materi seputar olahraga bola kecil sudah menanti Anda!</Text>
            <KeyboardAvoidingView style={{ alignSelf: 'center' }}
              keyboardVerticalOffset={10}
              behavior={"padding"}>
              <TextInput
                style={styles.inputEmail}
                placeholder='Email'
                keyboardType='email-address'
                autoCapitalize='none'
                returnKeyType='next'
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                onSubmitEditing={() => this.refs.txtPassword.focus()} />

              <TextInput
                style={styles.inputPassword}
                placeholder='Password' secureTextEntry
                value={this.state.password}
                returnKeyType='send'
                ref={"txtPassword"}
                onChangeText={password => this.setState({ password })} />

              <TouchableOpacity style={styles.btnLogin} onPress={this.SignIn}>
                <Text style={styles.textLogin}>Masuk</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this._backModal} style={{ alignSelf: 'center', marginTop: 20 }}>
                <Text style={{ fontFamily: 'PoppinsReg' }}>Daftar</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logotstext: {
    position: 'absolute',
    top: 15,
    right: 75,
    width: 92,
    height: 26
  },
  logotext: {
    position: 'absolute',
    top: 10,
    right: 25,
    width: 43,
    height: 34
  },
  inputEmail: {
    width: 320,
    height: 50,
    paddingLeft: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#a6bae0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    marginBottom: 25,
  },
  inputEmailReg: {
    width: '100%',
    height: 50,
    paddingLeft: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#a6bae0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    marginBottom: 25,
  },
  inputPassword: {
    width: 320,
    height: 50,
    paddingLeft: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#a6bae0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
  },
  inputPasswordReg: {
    width: '100%',
    height: 50,
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
    width: 320,
    height: 50,
    backgroundColor: '#EB5757',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 5,
  },
  btnRegis: {
    width: '100%',
    height: 50,
    backgroundColor: '#EB5757',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 5,
  },
  textLogin: {
    color: '#fff',
    fontFamily: 'PoppinsBold',
    fontSize: 14,
  }
})

export default SignIn;