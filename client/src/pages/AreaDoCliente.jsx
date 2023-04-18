import React, { useState } from 'react';
import QRCodeGenerator from '../components/QRCodeGenerator'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import '../style/AreaDoCliente.css';

function AreaDoCliente() {
  const [showQRCode, setShowQRCode] = useState(false);
  const [cliente, setCliente] = useState("");
  const [veiculo, setVeiculo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setCliente(event.target.elements.nome.value);
    setVeiculo(event.target.elements.veiculo.value);
    setShowQRCode(true);
  }

  return (
    <div className="App">
      <h1 className='logo'>ultracar</h1>
      <h2>Boas vindas ao cadastro Ultracar</h2>
      <h3>Insira suas informações abaixo</h3>
      <hr />
      {showQRCode ? (
        <>
        <div>
          <h4>Muito bem { cliente }, aqui esta seu QRCode</h4>
          <h4 className='h4-attention'>Lembre-se de guardar bem, ele é sua fixa de atendimento</h4>
          <QRCodeGenerator cliente={cliente} veiculo={veiculo} />
        </div>
        </>
      ) : (
        <form className='loginFuncionario' onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Digite seu nome</Form.Label>
            <Form.Control name="nome" type="text" placeholder="Nome" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Qual modelo de veiculo você dirige?</Form.Label>
            <Form.Control name="veiculo" type="text" placeholder="Veiculo" />
          </Form.Group>
          <Button type="submit" variant="primary" size="lg">
              Entrar
          </Button>
        </form>
      )}
    </div>
  );
}

export default AreaDoCliente;
