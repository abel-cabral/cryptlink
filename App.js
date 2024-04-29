import React from 'react';
import {
  ImageBackground,
  StyleSheet
} from 'react-native';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Criptografar from './Criptografar';
import Descriptar from './Descriptar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

const App = () => {
  const image = require('./assets/fundo.jpg');
  return (
    <BrowserRouter>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <Routes>
          <Route exact path='/' element={<Criptografar />} />
          <Route path='/*' element={<Descriptar />} />
        </Routes>
      </ImageBackground>
    </BrowserRouter>
  );
};

export default App;
