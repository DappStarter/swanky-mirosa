require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name repeat place evil inflict another army gather'; 
let testAccounts = [
"0xba12c284edb01f94717df632fc8ab0950c5e06b87c8a670f7bd9815198811c6d",
"0xd683bac3e7aa4b5cab06b61086b519343cb097fe1a11de812691e3f57d750dd2",
"0xad1bdbe25bf5929f7de06ae7b054a951510645762b13f4a727fc6ae7d2d19f34",
"0x7c68121e9235bbbbfbeb0b10955752045ccc87e46af1e21e589ebfa5971c9093",
"0x5db806c0fdbd83cfa344fb843f6b3d7e34e03daaa6b8b920b52964fecad8ed70",
"0xae5f7b08fe89dbf757253d0c69733c9ec60cef01b5c7db602b3ae21470c46272",
"0xd1583d55c0d23d294696ec185d7099b8518a16b778b840e8da5168bfb25ff11e",
"0x1fc8d082ac35362c7ee65ca44a725fc21ec2b98e17b099aba60ca11662595c6e",
"0x85f0fba4a53b4da6cca760aa0ccf69ce2aa0edd581322b563e5f4299ee6a932c",
"0xf9c85e462f6c87fc9578668c66116e7de46a73f390d863bc1cccba1fe4879ac1"
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
            version: '^0.5.11'
        }
    }
};
