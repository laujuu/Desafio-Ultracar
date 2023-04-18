import React from 'react';
import QRCodeGenerator from '../components/QRCodeGenerator'

function AreaDoCliente() {
  return (
    <div className="App">
      <h1 className='logo'>ultracar</h1>
      <h2>Boas vindas ao cadastro Ultracar</h2>
      <h3>Insira suas informações abaixo</h3>
      {/* Todo: forma do cliente digitar seu nome e veiculo e nao ficar estatico */}
      <QRCodeGenerator cliente="joao" veiculo="Fiat Uno"/>
      <h3>Lembre-se de guardar bem seu QRCode, ele é sua fixa de atendimento</h3>
    </div>
  );
}

export default AreaDoCliente;
