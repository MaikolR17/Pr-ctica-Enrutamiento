import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Bienvenido from '../Bienvenido/Bienvenido';
import Número from '../Número/Número';
import Palabra from '../Palabra/Palabra';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Bienvenido" element={ <Bienvenido /> } />
        <Route path="/:Número(\d+)" element={ <Número /> } />
        <Route path="/:palabra" element={ <Palabra /> } />
        <Route path="/:palabra/:colorTexto/:colorFondo" element={ <Palabra /> } />
      </Routes>
    </Router>
  );
}

export default App;
