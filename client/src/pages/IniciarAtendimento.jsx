import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import informacoes from "../mocks/carinfo_mock";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";

function IniciarAtendimento() {
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);

  const location = useLocation();
  const { cliente, veiculo } = location.state || {};

  function handleSelectChange(event) {
    const { value } = event.target;
    const [tipo, nome] = value.split(":");

    const preco = informacoes[tipo][nome].Preço;
    setTotal(total + preco);
  }

  function iniciarAtendimento() {
    localStorage.setItem(
      "atendimento",
      JSON.stringify({ cliente, veiculo, total })
    );
    navigate("/atendimentos");
  }

  return (
    <div>
      <h2>Atendimento em andamento</h2>
      <p>Cliente: {cliente}</p>
      <p>Veículo: {veiculo}</p>
      <hr />
      <div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Peças</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={handleSelectChange}
          >
            <option value="">Selecione uma Peça</option>
            {Object.entries(informacoes.Peças).map(([nome, { Preço }]) => (
              <option
                key={`peca:${nome}`}
                value={`Peças:${nome}`}
              >{`${nome} - R$ ${Preço}`}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Mão de obra</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={handleSelectChange}
          >
            <option value="">Selecione a mão de obra</option>
            {Object.entries(informacoes["Mão de obra"]).map(
              ([nome, { Preço }]) => (
                <option
                  key={`mao-de-obra:${nome}`}
                  value={`Mão de obra:${nome}`}
                >{`${nome} - R$ ${Preço}`}</option>
              )
            )}
          </Form.Select>
        </Form.Group>
      </div>
      <div>
        <h4>Valor total</h4>
        <h4>R$: {total}</h4>
      </div>
      <Button variant="primary" size="lg" onClick={iniciarAtendimento}>
        Iniciar Atendimento
      </Button>
    </div>
  );
}

export default IniciarAtendimento;
