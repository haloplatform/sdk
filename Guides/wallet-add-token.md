# Add Tokens To Wallet

So you want to add a token to the wallet to send and receive it? Simple.

### Go to contract screen on wallet:

![wallet-navigate](./img/wallet-contract.PNG)

### Click to watch a contract:

![wallet-navigate](./img/wallet-watch-contract.PNG)

### Select Token:

![wallet-navigate](./img/wallet-contract-watch-token.PNG)

### Enter your details of the contract in the form:

![wallet-navigate](./img/wallet-contract-token-add.PNG)

If you look in `testnet-tokens/token-name/data.json` you can find the details to put here, and copy the contents of `abi.json` into the abi field as well.

- `name` : The name of the token for your reference
- `symbol` : The ticker of the token
- `decimals` : The amount of decimals the token accepts
- `address` : The address of the token
- `abi` : The abi info from the contract deployment

---

Once you have your token added you can go back to your accounts screen and select it from the dropdown as shown below.

![wallet-navigate](./img/wallet-token-select.PNG)