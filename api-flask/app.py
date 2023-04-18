from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)  # permite solicitações de origens diferentes (Cross-Origin Resource Sharing)


# simula um banco de dados de usuários e senhas
users = {
    'Dominique': 'dom1',
    'Fernanda': 'fer1',
    'Aline': 'ali1'
}


# rota para fazer login
@app.route('/login', methods=['POST'])
def login():
    # obtém as credenciais de usuário e senha do corpo da solicitação (request body)
    username = request.json.get('username')
    password = request.json.get('password')

    # verifica se o usuário e a senha estão corretos
    if username in users and users[username] == password:
        # retorna um token de autenticação
        return jsonify({'token': 'Acesso Liberado'}), 200
    else:
        return jsonify({'message': 'Usuário ou senha inválidos'}), 401


if __name__ == '__main__':
    app.run()
