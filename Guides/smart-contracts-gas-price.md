[home](../README.md)

# Smart Contracts - Gas Price && Gas Usage

At this time all transactions on the Halo Platform blockchain use a gas price of `0`. 

## What Does This Mean?

This means that transactions still require gas to be sent, and chain details still use gas to do operations but that the gas cost is `0`. This means all transactions on the chain are technically free. 

## Gas Usage

Contracts and Transactions still require you to provide a gas amount, but you should be able to provide an arbitrary amount, and one that is high enough to process your transaction. The gas consumed will prevent the EVM from going into an infinite loop, and on failures it will still consume all the Gas.

## How Does This Affect Contract Development?

It means that all contracts on the Halo Platform blockchain are free to use and will not take portions of transactions as fee's. This means that if you are taking payment of 1 HALO that you will recieve 1 HALO and the user only has to send 1 HALO.
