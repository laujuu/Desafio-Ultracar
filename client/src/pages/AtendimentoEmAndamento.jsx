import { useLocation } from 'react-router-dom';

function AtendimentoEmAndamento() {
    const location = useLocation();
    const { cliente, veiculo } = location.state || {};

    return (
        <div>
          <h2>Atendimento em andamento</h2>
          <p>Cliente: {cliente}</p>
          <p>Veículo: {veiculo}</p>
        </div>
    );
}

export default AtendimentoEmAndamento;
