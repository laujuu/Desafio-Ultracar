import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Atendimentos() {
    const navigate = useNavigate();
  const [status, setStatus] = useState("Em andamento");
  const atendimento = JSON.parse(localStorage.getItem("atendimento"));

  function handleFinalizar() {
    localStorage.setItem(
      "atendimento",
      JSON.stringify({ ...atendimento, status: "Finalizado" })
    );
    setStatus("Finalizado");
  }

  function handleGoBack() {
    navigate("/area-do-funcionario")
  }

  return (
    <div>
      <h2>Atendimento {status}</h2>
      <p>Cliente: {atendimento.cliente}</p>
      <p>Veículo: {atendimento.veiculo}</p>
      <p>Peça e mão de obra selecionada: {atendimento.peca}</p>
      <p>Valor total: R$ {atendimento.total}</p>
      <Button variant="success" size="lg" onClick={handleFinalizar}>
        Finalizar Atendimento
      </Button>
      <Button variant="success" size="lg" onClick={handleGoBack}>
        Iniciar outro Atendimento
      </Button>
    </div>
  );
}

export default Atendimentos;
