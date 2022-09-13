import { Text, StyleSheet, View, Button, Image, ImageBackground } from 'react-native'
import React, { Component } from 'react'

export default class homeScreen extends Component {
  render() {
    const {navigation} = this.props 
    return (
        <View style={styles.container}>
          <ImageBackground style={styles.background} source ={require('../components/images/onbording.png')} resizeMode="cover">

              <Image source={require('../components/icons/logo.png')} />
              <Text>Hilo</Text>
          </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    background:{
        flex: 1,
        justifyContent: 'center',
        
        
    },
    text:{
        color: "black"

    },
})