import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Criptografar from './Criptografar';
import Descriptar from './Descriptar';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Criptografar/>} />
        <Route path="/*" element={<Descriptar/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;