import React, { useState, useEffect } from 'react';
import QrReader from 'react-qr-scanner';
import { useNavigate } from 'react-router-dom';

function QRCodeScanner() {

  const [qrData, setQrData] = useState('');
  const navigate = useNavigate();
  console.log(qrData);

  const handleScan = (data) => {
    if (data) {
        const [cliente, veiculo] = data.text.split(' - ');
        const qrObject = { cliente, veiculo };
        setQrData(qrObject);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  useEffect(() => {
    if (qrData) {
      navigate('/atendimento-em-andamento', { state: qrData });
    }
  }, [qrData, navigate]);

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
    </div>
  );
}

export default QRCodeScanner;
