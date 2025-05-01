const QRCode = require('qrcode');

const url = 'https://github.com/Druaka';

QRCode.toFile('qr_Druaka.png', url, {
    color: {
        dark: '#000000',  // QR code color
        light: '#FFFFFF'  // Background color
    }
}, function (err) {
    if (err) throw err;
    console.log('QR code generated!');
});
