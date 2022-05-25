const BigNumber = require('bignumber.js');
const pandojs = require('..');
const SendTx = pandojs.SendTx;
const TxSigner = pandojs.TxSigner;
const Utils = pandojs.Utils;

const chainID = "testnet";

function createSendTx(){
    const ten18 = (new BigNumber(10)).pow(18); // 10^18, 1 Pando = 10^18 PandoWei, 1 Gamma = 10^ PTXWei
    const pandoWeiToSend = (new BigNumber(2)).multipliedBy(ten18);
    const ptxWeiToSend = (new BigNumber(3)).multipliedBy(ten18);
    const feeInPTXWei  = (new BigNumber(10)).pow(12); // Any fee >= 10^12 PTXWei should work, higher fee yields higher priority
    const senderAddr =  "0x59c32D1F9fF59FE524aaA34B703C0aC8Fad4d4d0";
    const receiverAddr = "0xB91f6163E6f1A60b6d932dcD1C190BD364e0df05";
    const senderSequence = 1; //TODO: this should be dynamic, similar to the "nonce" parameter for Ethereum

    let tx = new SendTx(senderAddr, receiverAddr, pandoWeiToSend, ptxWeiToSend, feeInPTXWei, senderSequence);

    console.log("Assembled a SendTx transaction\n\tfrom   : " + senderAddr + "\n\tto     : " + receiverAddr 
        + "\n\tamount : " + pandoWeiToSend + " PandoWei, " + ptxWeiToSend + " PTXWei"
        + "\n\tfee    : " + feeInPTXWei + " PTXWei"
        + "\n\tseq    : " + senderSequence)

    return tx;
}

test('should sign and serialize a SendTx', () => {
    // hard-coded privateKey for testing purposes only :)
    let privateKey = "0xc88b2d8a81ceea76b41e005556c1c77c0062a5ba0566a1fe214770f485adde4f";
    let sendTx = createSendTx();

    const signedRawTxBytes = TxSigner.signAndSerializeTx(chainID, sendTx, privateKey);

    console.log("SignedRawTxBytes: " + signedRawTxBytes.toString('hex'));

    expect(signedRawTxBytes).not.toBe(null);
});