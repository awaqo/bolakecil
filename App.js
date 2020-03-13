import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';

import MateriRoot from './src/component/routes/stackNavigator';
import LoginForm from './src/component/signIn';
import Loading from './src/component/loading';


class App extends Component {
  state = {
    loggedIn: null
  }

  componentDidMount() {
    var config = {
      apiKey: "AIzaSyDt3vKdqZO-MChx1W81LKU11FcFBxxzFVo",
      authDomain: "rnlogin-54fbf.firebaseapp.com",
      databaseURL: "https://rnlogin-54fbf.firebaseio.com",
      projectId: "rnlogin-54fbf",
      storageBucket: "rnlogin-54fbf.appspot.com",
      messagingSenderId: "947567495895",
      appId: "1:947567495895:web:315ec38146bb7d3aec3e92",
      measurementId: "G-D5SMWJJBK9"
    };
    // Initialize Firebase
    if(!firebase.apps.length){
      firebase.initializeApp(config);
    }
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          loggedIn: true
        })
      } else {
        this.setState({
          loggedIn: false
        })
      }
    })
  }

  renderContent = () =>{
    switch(this.state.loggedIn){
      case false:
        return <LoginForm />
      case true:
        return <MateriRoot />

      default:
        return <Loading />
    }
  }

  render(){
    return(
      <View style={styles.container}>
       {this.renderContent()}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height:'100%',
    width:'100%'
  },
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
})

export default App;