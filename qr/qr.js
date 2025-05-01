const QRCode = require('qrcode');

const url = 'https://github.com/Druaka';

QRCode.toFile('qr_Druaka-light.png', url, {
    color: {
        dark: '#000000',  // QR code color
        light: '#FFFFFF'  // Background color
    }
}, function (err) {
    if (err) throw err;
    console.log('QR code generated!');
});

QRCode.toFile('qr_Druaka-dark.png', url, {
    color: {
        dark: '#FFFFFF',  // QR code color
        light: '#000000'  // Background color
    }
}, function (err) {
    if (err) throw err;
    console.log('QR code generated!');
});
