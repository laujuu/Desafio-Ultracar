import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1 className='logo'>ultracar</h1>
      <h2>Olá! Boas vindas ao sistema Ultracar</h2>
      <div className="mb-2">
        <Button onClick={() => navigate("/login-funcionario")} variant="primary" size="lg">
          Area do Atendente
        </Button>
        <Button onClick={() => navigate("/area-do-cliente")} variant="primary" size="lg">
          Area do Cliente
        </Button>
      </div>
    </div>
  );
}

export default MainPage;
