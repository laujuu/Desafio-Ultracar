import { useState } from 'react';

import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logoHead from '../assets/logohead.png'
import '../style/LoginFuncionario.css'

import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password
      });
      const token = response.data.token;
      console.log(token);
      navigate('/area-do-funcionario');
    } catch (error) {
      console.error('Não autenticado', error.message);
    }
  };

  return (
    <div>
      <img className="logohead" src={ logoHead } alt="logo da ultracar"/>
    <form className='loginFuncionario' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Usuario</Form.Label>
        <Form.Control  type="text" placeholder="Digite seu usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Senha</Form.Label>
        <Form.Control  type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button type="submit" variant="primary" size="lg">
          Entrar
      </Button>
    </form>
    </div>
  );
}

export default Login;
