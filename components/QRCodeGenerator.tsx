import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeGenerator: React.FC = () => {
  const menuUrl = `${window.location.origin}${window.location.pathname}#/menu`;

  const downloadQRCode = () => {
    const canvas = document.getElementById('qr-code-canvas') as HTMLCanvasElement;
    if (canvas) {
      const pngUrl = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = 'tspot-menu-qr-code.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center border border-white/10">
      <h2 className="text-2xl font-bold mb-4 text-yellow-400">Menu QR Code</h2>
      <p className="text-gray-400 mb-4 text-sm">Customers can scan this to view the menu.</p>
      <div className="bg-white p-2 inline-block rounded-lg border border-gray-200 shadow-inner">
         <QRCodeCanvas
            id="qr-code-canvas"
            value={menuUrl}
            size={180}
            level={"H"}
            includeMargin={true}
          />
      </div>
      <button
        onClick={downloadQRCode}
        className="mt-6 w-full bg-yellow-400 text-black font-bold py-2 px-4 rounded-md hover:bg-yellow-500 transition-colors duration-200"
      >
        Download QR Code
      </button>
    </div>
  );
};

export default QRCodeGenerator;