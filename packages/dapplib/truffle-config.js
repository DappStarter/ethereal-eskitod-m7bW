require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace person bone tooth figure render remain purpose hidden entry bridge silly'; 
let testAccounts = [
"0x1426bbc8839ccbe046badfa98b17cd7dc9f34756433d526392026f93d0463339",
"0x1a80e0895d7ffae328edd0a3f8e6e5496c3bbeeac34ea369c00159529cf8b5fe",
"0xbb786c600264daeb9cc5c0a3869d64f5149d7dd485411eb2702dadceac9c81ff",
"0x2c8d2d8f98af996e345e97fac5a3617a5614737422554e102f21c8133ee6053d",
"0xbc5a837487833761ab5e1f29c47c83badabe4e8673d51cf84f468d4cb1d03296",
"0x14fa7350d51a8ea37bd912e564a89b1664a0f84cd3d894accaf08c2923e463bc",
"0x606cce4a2f68ac3526eb08fd503858bd6f196a92654b057ad2a96b0dbdc7c014",
"0xaa7001845f7af15d7bd4c24a23bd04b59d7460cb9a44be884097507d303856e6",
"0x90167f215ca3253fad5e2e6f9b336bcc7fd7d10885b61fcb54ad9fc5667af1cb",
"0x35a1d68a61e4423e05bbbd7c63fb38fa1b0bfc47f69a02bcb6b3653059598d0e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

