import React from 'react';
import QRCodeScanner from '../components/QRCodeScanner'


function AreaDoFuncionario() {
  return (
    <div className="App">
      <h1 className='logo'>ultracar</h1>
      <h2>Área de Atendimento</h2>
      <h3>Use seu scanner para escanear o qrcode do cliente</h3>
      <QRCodeScanner />
    </div>
  );
}

export default AreaDoFuncionario;
