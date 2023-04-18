import React from 'react';
import QRCode from 'qrcode'
import { useEffect, useState } from 'react';
import '../style/QRCodeGenerator.css'

function QRCodeGenerator({ cliente, veiculo }) {
  const [src, setSrc] = useState('');

  useEffect(() => {
    const qrData = `${cliente} - ${veiculo}`;
    QRCode.toDataURL(qrData).then((data) => {
        setSrc(data);
    })
  }, [cliente, veiculo]);

  return (
    <div className="App">
      <img src={src} alt="QR Code" />
    </div>
  );
}

export default QRCodeGenerator;
