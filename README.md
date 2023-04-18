# Desafio Ultracar

Determinada oficina necessita de um processo para  execução de serviço em veículos. 
Como pessoa responsável pelo desenvolvimento, você  montará um fluxo e apresentará a sua solução  desenvolvida usando a construção de telas. 


</details>

## Documentação Docs:
[Google Docs](https://docs.google.com/document/d/12PwP4PInQGC2zaKcEHTTTUS0Fas2zixSt6aUcWdVcq0/edit?usp=sharing)


## Histórico de `Commits`
  * Para ver a evolução do codigo você pode checar o histórico de commits  
  ![Screenshot_9](https://user-images.githubusercontent.com/37710776/229648831-1d560b18-a34f-42bf-91b3-20a44ff2125f.png)
  
  
  
## Como clonar e testar o projeto em sua `maquina`

* Use o comando: `git clone git@github.com:laujuu/Desafio-Ultracar.git`

  1. Entre na pasta do repositório que você acabou de clonar:

* `cd Desafio-Ultracar`

  2. Crie o ambiente virtual para o projeto

* `python3 -m venv .venv && source .venv/bin/activate`
  
  3. Instale as dependências

* `python3 -m pip install -r dev-requirements.txt`


## Como testar a aplicação

Para executar os testes certifique-se de que você está com o ambiente virtual ativado

  <strong>Executar os testes</strong>

  Para testar o app.py:

  ```bash
  cd api_flask/
  pytest app.py
  ```

## Rodando a API

  1. Certifique-se de estar na pasta da api:

* `cd api_flask/`

  2. Executando a api

* `python app.py`
  
Pronto, agora a API ja esta rodando



## Rodando o Front End

  1. Em um terminal deixe a API rodando como explicado no passo anterior:

  2. Entre na pasta do front

* `cd client/`

  2. instale as dependencias

* `npm install`

 3. Rode o Front End

* `npm run dev`

Pronto agora o front e o back estão funcionando e comunicando entre sí, fique a vontade para explorar ;)



