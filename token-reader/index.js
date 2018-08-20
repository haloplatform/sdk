const Web3 = require("web3");
const config = require("./config.json");

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const from = {
    from: config.publicAddress,
    gas: 3000000,
}

const run = async () => {
    
    const tcontract = web3.eth.contract(config.contractABI);
    const token = tcontract.at(config.contractAddress);

    // get balance
    // balance takes (address account)
    console.log(
        "balance:",
        await web3.fromWei(await token.balanceOf(from.from), "ether").toString()
    )

    // transfer tokens
    // transfer takes (address receiver, uint amount)
    console.log(
        "transfer:", 
        await token.transfer("0x0", web3.toWei("10", "ether"), from)
    );

    // approve tokens
    // approve takes (address spender, uint amount)
    console.log(
        "approve:", 
        await token.approve("0x0", web3.toWei("10", "ether"), from)
    );

    // ... etc
    // use the iToken to interface with any ERC20 contract as long as you have it's address
}

run()