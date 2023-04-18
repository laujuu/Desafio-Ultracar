import React, { useState } from 'react';
import QrReader from 'react-qr-scanner';

function QRCodeScanner() {
  const [qrData, setQrData] = useState('');
  console.log('dataqr', qrData);
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
