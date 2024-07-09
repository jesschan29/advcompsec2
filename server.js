const express = require('express');
const speakeasy = require('speakeasy');
const qrcode = require('qrcode');
const Web3 = require('web3');
const app = express();
const port = 3000;

// Connect to Ganache
const web3 = new Web3('https://advcompsec2-git-main-jessicas-projects-11605c90.vercel.app:8545'); // Update the URL if necessary

const privateKeys = [
    '0x5ad0e06ab82a96d6d4c95b50cff9e56bea6a7afe7b6e955ecd3642f1fcb0baa4',
    '0x1b6bb461d7e7910e38490cabbdda7d0bce0a1019865cce9e85776f4b9b41314c',
    '0x916e672a608d1a4c817c81153fef9cedc4dabf925687704e6a895c8889378a58',
    '0x4a41adab0cd944755b9933d0001b729a88d6e7ea297d779d6190e05765b554a1',
    '0xc7f358626bd092a7e79a69821666040391f21b24d0e44cda77c5605dc90a3594',
    '0xf3c6992d755bb1ccb61282eb3b5372dd8cff2227a5338f0043c508149148da04',
    '0x6450abb82a7a4062757ea161046d42d451744485bc9f133a983ebd30c103cffe',
    '0x458b55fed62926fde943317e937cff7bad81e9264da6e000d011b757fcb31d68',
    '0x8f20a03701a08800cf3b9f7ed33474f95408ac17d4c59fb030e1396dfb3a112b',
    '0x4ce84b2e5bc51a202585813ede547d03e452bc6a1933fb52b6d6f4c40b340bfc'
];

// Add accounts to web3 instance
privateKeys.forEach((privateKey) => {
  web3.eth.accounts.wallet.add(privateKey);
});

console.log('Accounts connected:');
console.log(web3.eth.accounts.wallet);

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

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
