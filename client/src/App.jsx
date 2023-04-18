import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AreaDoCliente from './pages/AreaDoCliente'
import LoginFuncionario from './pages/LoginFuncionario';
import AreaDoFuncionario from './pages/AreaDoFuncionario'
import IniciarAtendimento from './pages/IniciarAtendimento';
import Atendimentos from './pages/Atendimentos';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login-funcionario" element={<LoginFuncionario />} />
          <Route path="/area-do-cliente" element={<AreaDoCliente />} />
          <Route path="/area-do-funcionario" element={<AreaDoFuncionario />} />
          <Route path="/iniciar-atendimento" element={<IniciarAtendimento />} />
          <Route path="/atendimentos" element={<Atendimentos />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
