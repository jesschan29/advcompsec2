const express = require('express');
const speakeasy = require('speakeasy');
const qrcode = require('qrcode');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

let users = {}; // This will act as a simple in-memory store for user secrets

// Route to generate a QR code for 2FA setup
app.get('/generate', (req, res) => {
    const secret = speakeasy.generateSecret({ length: 20 });
    // const email = req.query.email; // Assume email is passed as query parameter
    // users[email] = { secret: secret.base32 }; // Store secret for user

    qrcode.toDataURL(secret.otpauth_url, (err, data_url) => {
        if (err) {
            console.error('Error generating QR code:', err);
            res.status(500).send('Error generating QR code');
        } else {
            console.log(`Generated secret: ${secret.base32}`);
            res.json({ qrCode: data_url, setupKey: secret.base32 });
        }
    });
});

// Route to verify the token
app.post('/verify', (req, res) => {
    const { secret, token } = req.body;
    // const userSecret = users[email]?.secret;
    console.log(`Verifying token: ${token} with secret: ${secret}`);
    if (!secret) {
        return res.status(400).json({ message: 'User not found' });
    }
    const verified = speakeasy.totp.verify({
        secret: secret,
        encoding: 'base32',
        token,
        window: 1 // Use a window of 1 to allow some leeway in case of time discrepancies
    });

    if (verified) {
        console.log('2FA Token is valid!');
        res.json({ message: '2FA Token is valid!' });
    } else {
        console.log('2FA Token is invalid!');
        res.json({ message: '2FA Token is invalid!' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
