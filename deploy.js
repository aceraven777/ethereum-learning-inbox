require('dotenv').config();

const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    process.env.WALLET_MNEMONIC,
    process.env.WALLET_PROVIDER_URL
);

const web3 = new Web3(provider);
