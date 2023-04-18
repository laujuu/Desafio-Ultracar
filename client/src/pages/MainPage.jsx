import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function MainPage() {
  return (
    <div className="App">
      <h1 className='logo'>ultracar</h1>
      <h2>Olá! Boas vindas ao sistema Ultracar</h2>
      <div className="mb-2">
        <Button variant="primary" size="lg">
          Area do Atendente
        </Button>{' '}
        <Button variant="primary" size="lg">
          Area do Cliente
        </Button>
      </div>
    </div>
  );
}

export default MainPage;
