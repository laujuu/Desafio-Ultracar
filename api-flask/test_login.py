import requests


def test_login_success():
    # Testa um login com credenciais corretas
    response = requests.post('http://localhost:5000/login', json={'username': 'Dominique', 'password': 'dom1'})
    assert response.status_code == 200
    assert response.json() == {'token': 'Acesso Liberado'}


def test_login_failure():
    # Testa um login com credenciais incorretas
    response = requests.post('http://localhost:5000/login', json={'username': 'Dominique', 'password': 'senha_incorreta'})
    assert response.status_code == 401
    assert response.json() == {'message': 'Usuário ou senha inválidos'}
