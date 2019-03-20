[home](../README.md)

# Transactions - Signing

So our chain signs transactions a little differently from ethereum, and this means that up until a few weeks ago you had to either send a transaction via an account unlocked on glo, or unlocked in extension / feather clients.

With the release of SSS [Simple Sign System](https://github.com/haloplatform/simple-sign-system) this is no longer the case.

Using SSS you can send a transaction via remote RPC, or to a local glo node with no account unlocked.

This assumes you want to sign locally using a key you are importing directly into web3 to do a transaction.

Find below an example script on how to send a transaction using sss.

```javascript

// import and setup sss
const sss = require('@haloplatform/simple-sign-system');
const sss = new SimpleSignSystem();

// import and setup web3 1.x
var Web3 = require('web3');
var web3 = new Web3("https://testnet-rpc.haloplatform.tech");

// generate an account for this example, for real you'd need an account with actual funds.
web3.eth.accounts.wallet.create(1); 

const tx = {
    value: web3.utils.toHex(web3.utils.toWei(record.amount, 'ether')),
    gas: 21000, // minimum gas for transaction // gas price 0
    from: address,
    to: "0x0000000000000000000000000000000000000000", // burning the halo essentially
}


// just sign it
sss.signTx(tx, web3.eth.accounts.wallet[0].privateKey, web3).then((tx) => {
    console.log(tx.serialized);
});


// or sign it and send it.
sss.signAndSend(tx, web3.eth.accounts.wallet[0].privateKey, web3, true).then((result) => {
    console.log(result.transactionHash);
});
```

> Also works with async/await

For more documentation see [the sss docs](https://github.com/haloplatform/simple-sign-system).