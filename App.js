import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Image,Alert } from 'react-native';
import About from './src/About';
import Images from './src/Images';
import Buttons from './src/Buttons';
import Counter from './src/Counter';
import Contact from './src/Contact';
import FavoriteMovie from './src/FavoriteMovie';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Images></Images>
      <About></About>
      <Buttons></Buttons>
      <FavoriteMovie></FavoriteMovie>
      <Counter></Counter>
      <Contact></Contact>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
