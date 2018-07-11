# Explorer API

Data endpoints for blockchain information on the Halo Platform blockchain.

## Table

- [TX Count for Address](#tx-count-for-address)
- [List TX's for Address](#list-tx-for-address)
- [Get Latest Block](#get-latest-block)
- [Get latest block with transactions](#get-latest-block-with-transactions)
- [Get Block With Transactions](#get-block-with-transactions)
- [Get Block](#get-block)
- [Get last N blocks](#get-last-n-blocks)
- [Get Current Supply](#get-current-supply)


## Examples

### TX Count for Address

Get count of all transactions for specific wallet address, response includes incoming and outcoming transactions

**Params**

- wallet_address `{ string: halo based 0x address }`

**Endpoint**
```
https://api-explorer.haloplatform.tech/addr/{{wallet_address}}/count
```

**Example Request**

```bash
curl --request GET \
  --url 'https://api-explorer.haloplatform.tech/addr/0xF00f710180822ec72387bedb9B4ef7890939aeAb/count'
```

**Example Response**

```json
{
    "count": 5124
}
```

--------------------------------------------------------

### List TX for Address

Get list of all transactions for specific wallet address, response includes incoming and outcoming transactions

**Params**

- page `{ number }`
- limit `{ number: 1 -> 100 }`

**Endpoint**

```
https://api-explorer.haloplatform.tech/addr/{{wallet_address}}?page=1&limit=11
```

**Example Request**
```bash
curl --request GET \
  --url 'https://api-explorer.haloplatform.tech/addr/0xF00f710180822ec72387bedb9B4ef7890939aeAb?page=1&limit=11'
```

**Example Response**
```json
[
  {
    "blockHash": "0x3e2e808347d913eb427d55ff6328618a4b39d16e2924511dbaf71d3a9b4e3bab",
    "blockNumber": 3639015,
    "from": "0xf00f710180822ec72387bedb9b4ef7890939aeab",
    "gas": 1000000,
    "gasPrice": "0",
    "hash": "0xbbb4782bac9c9a334bd35d1023d7c1fb41fd66762e25737409f7e3b58936ad69",
    "input": "0x448115850000000000000000000000002d11100c3074d8b47af23b35336ef7585ca3fdea0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000e35342e3235352e3139302e323430000000000000000000000000000000000000",
    "nonce": 5123,
    "r": "0x747cbb19d9e872d5d15b52b59ccf16a783decd1bdf1a711ff5ef181e66236e0c",
    "s": "0x3bad4af30b904f13c806407cd6f534db38c77a64b4915a05a875426856ebbbd6",
    "to": "0xd674dd3cdf07139ffda85b8589f0e2ca600f996e",
    "transactionIndex": 0,
    "v": "0x1c",
    "value": "0",
    "timestamp": 1.5305424834058e+18,
    "createdAt": "2018-07-02T14:41:23.000Z",
    "updatedAt": "2018-07-02T14:41:23.000Z",
    "BlockNumber": 3639015
  },
  ...
]
```

--------------------------------------------------------

### Get Latest Block

**Params**
None

**Endpoint**
```
https://api-explorer.haloplatform.tech/block/latest
```

**Example Request**

```
curl --request GET \
  --url 'https://api-explorer.haloplatform.tech/block/latest'
```

**Example Response**
```json
{
  "difficulty": "677976",
  "extraData": "0x",
  "gasLimit": 180000000,
  "gasUsed": 33352,
  "hash": "0xda38a27f07975ed1c9f46abc58d8fe6d7448d8894497607c1cc77b2fc5c8de16",
  "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "miner": "0x0000000000000000000000000000000000000000",
  "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "nonce": "0x0000000000000000",
  "number": 4798122,
  "parentHash": "0x265aeae2c4c887f8704d6c55441a89375f3738f311d06b96bb9c440a30ce7e60",
  "receiptsRoot": "0x067da4435c09306dfc88733ec166f75cf7eaddcc15e3307e7c5cf79374eb8c84",
  "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
  "size": 755,
  "stateRoot": "0x23fefc4d52aa72f1ef1209524a3e1c14d70a5e0f87f33ce9927e4327c376a9c7",
  "transactionsRoot": "0xca9310739f86abfc4bf09a693d9a53c5b2b2f4b95ff695ba448fd3aefddbc24c",
  "timestamp": 1.5313262562558e+18,
  "totalDifficulty": "708151100859",
  "uncles": null,
  "createdAt": "2018-07-11T16:24:16.000Z",
  "updatedAt": "2018-07-11T16:24:16.000Z"
}
```
--------------------------------------------------------

### Get latest block with transactions 

**Params**

- tx `{ boolean: default false }`

**Endpoint**
```
https://api-explorer.haloplatform.tech/block/latest?tx={value}
```

**Example Request**
```
https://api-explorer.haloplatform.tech/block/latest?tx=true
```

**Example Response**
```json
{
  "difficulty": "1355775",
  "extraData": "0x",
  "gasLimit": 180000000,
  "gasUsed": 33224,
  "hash": "0x04ab1ff5fadb8d47973c6d8ad492b5f1f3ab61308edd764f75504b66fe857328",
  "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "miner": "0x0000000000000000000000000000000000000000",
  "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "nonce": "0x0000000000000000",
  "number": 4813393,
  "parentHash": "0xd96ef1f82f8a557f6caa70d8000835e7959c26c8378a5a63a63e9ab1c1336b18",
  "receiptsRoot": "0x2d14f7979933a45c0e425e86a9c4a3c5452507ae1442e93a00971173dd17e7ae",
  "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
  "size": 755,
  "stateRoot": "0x7905b429702c007ea86e5184223ec37dd624eeb0d154f5e20876d91d6e08ad4b",
  "transactionsRoot": "0x4a43b8432e514a683eb5412a721091116210e0d370f0cc66d60accaaa0bbdcd1",
  "timestamp": 1.5313361541145e+18,
  "totalDifficulty": "727570254332",
  "uncles": null,
  "createdAt": "2018-07-11T19:09:14.000Z",
  "updatedAt": "2018-07-11T19:09:14.000Z",
  "transactions": [
    {
      "blockHash": "0x04ab1ff5fadb8d47973c6d8ad492b5f1f3ab61308edd764f75504b66fe857328",
      "blockNumber": 4813393,
      "from": "0xb0c669c22323a7dc0de4843c4d74f07201133f0b",
      "gas": 1000000,
      "gasPrice": "0",
      "hash": "0xc0f2de92236762f23049c7fcdbaf7bfa2f3c6ee4bf95479c4fae551e03b4c9c7",
      "input": "0x448115850000000000000000000000000a2c6d4d3f878df7548049b8a5626785c0374c420000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000c33342e3234322e32312e39330000000000000000000000000000000000000000",
      "nonce": 892,
      "r": "0x226ac2fc1ddf01193ccab70d058f39241aa6a04c7a73be41e1270f49829e63ae",
      "s": "0x4ddc76dc0fafd96b8ea5a2bd4fe76df7b3da3e3baa3714a3ccd761ef7b80676",
      "to": "0xd674dd3cdf07139ffda85b8589f0e2ca600f996e",
      "transactionIndex": 0,
      "v": "0x1c",
      "value": "0",
      "timestamp": 1.5313361541145e+18,
      "createdAt": "2018-07-11T19:09:14.000Z",
      "updatedAt": "2018-07-11T19:09:14.000Z",
      "BlockNumber": 4813393
    }
  ]
}
```

--------------------------------------------------------

### Get Block

**Params**

- block_number `{ number }`

**Endpoint**
```
https://api-explorer.haloplatform.tech/block/{{block_number}}
```

**Example Request**
```
https://api-explorer.haloplatform.tech/block/1
```

**Example Response**
```json
{
  "difficulty": "131072",
  "extraData": "0x",
  "gasLimit": 9000000,
  "gasUsed": 90000,
  "hash": "0x10830a70a2649a14c8eb0be180252f050f9be64d2d2b4f1e27e85aa6162fb618",
  "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "miner": "0x0000000000000000000000000000000000000000",
  "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "nonce": "0x0000000000000000",
  "number": 1,
  "parentHash": "0x364089a7a1588f57ad0c66a8449149f0db94e011232d3e36cb50cf2fc969f001",
  "receiptsRoot": "0xf34bd91a801c9c814edbc97e48d3184a2f1d223aa08663521efb14e3be7e3498",
  "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
  "size": 633,
  "stateRoot": "0x85d7a6ee155308121ddd780488c426ec748f83765b7b7d7dc6727eb757ee3b79",
  "transactionsRoot": "0x4c2502804e2a655c1c07b2923c4cbb564855e41e74d7fa77c72e5d04ead2d634",
  "timestamp": 1.5269676045187e+18,
  "totalDifficulty": "131072",
  "uncles": null,
  "createdAt": "2018-06-22T21:00:42.000Z",
  "updatedAt": "2018-06-22T21:00:42.000Z"
}
```


--------------------------------------------------------
### Get Block With Transactions
Get block by specific number including transactions history

**Params**

- block_number `{ number }`
- tx `{ boolean: default false }`

**Endpoint**
```
https://api-explorer.haloplatform.tech/block/{{block_number}}?tx={value}
```

**Example Request**
```
https://api-explorer.haloplatform.tech/block/1?tx=true
```

**Example Response**
```json
{
  "difficulty": "131072",
  "extraData": "0x",
  "gasLimit": 9000000,
  "gasUsed": 90000,
  "hash": "0x10830a70a2649a14c8eb0be180252f050f9be64d2d2b4f1e27e85aa6162fb618",
  "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "miner": "0x0000000000000000000000000000000000000000",
  "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "nonce": "0x0000000000000000",
  "number": 1,
  "parentHash": "0x364089a7a1588f57ad0c66a8449149f0db94e011232d3e36cb50cf2fc969f001",
  "receiptsRoot": "0xf34bd91a801c9c814edbc97e48d3184a2f1d223aa08663521efb14e3be7e3498",
  "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
  "size": 633,
  "stateRoot": "0x85d7a6ee155308121ddd780488c426ec748f83765b7b7d7dc6727eb757ee3b79",
  "transactionsRoot": "0x4c2502804e2a655c1c07b2923c4cbb564855e41e74d7fa77c72e5d04ead2d634",
  "timestamp": 1.5269676045187e+18,
  "totalDifficulty": "131072",
  "uncles": null,
  "createdAt": "2018-06-22T21:00:42.000Z",
  "updatedAt": "2018-06-22T21:00:42.000Z",
  "transactions": [
    {
      "blockHash": "0x10830a70a2649a14c8eb0be180252f050f9be64d2d2b4f1e27e85aa6162fb618",
      "blockNumber": 1,
      "from": "0x8820e5c0a9e099998ad909d9a24dd3d1deeb5b55",
      "gas": 90000,
      "gasPrice": "0",
      "hash": "0xcbf31fd1dc92d49f5481d5392b6309877488fa7cf12c5c463a32202351290f9c",
      "input": "0x7f7465737432000000000000000000000000000000000000000000000000000000600057",
      "nonce": 0,
      "r": "0x632abdc8257cfd1b626b5afddd0b998c69d5c8b0414a9bcdc4dd0aec5feaba40",
      "s": "0x1c309d96dd7fadd1d1a0a18134a9b6caad25a951d574552004b6c9c13318005e",
      "to": null,
      "transactionIndex": 0,
      "v": "0x1c",
      "value": "0",
      "timestamp": 1.5269676045187e+18,
      "createdAt": "2018-06-22T21:00:42.000Z",
      "updatedAt": "2018-06-22T21:00:42.000Z",
      "BlockNumber": 1
    }
  ]
}
```

---
### Get last N blocks

**Params**

- amount `{ number }`

**Endpoint**
```
https://api-explorer.haloplatform.tech/block/last/{amount}
```

**Example Request**
```
https://api-explorer.haloplatform.tech/block/last/10
```

**Example Response**
```json
[
  {
    "difficulty": "677944",
    "extraData": "0x",
    "gasLimit": 180000000,
    "gasUsed": 33288,
    "hash": "0x1fd65a055d1ee653707bd36cd5b8e7370fb337d17287a3e12c1584c1cff6e73b",
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "miner": "0x0000000000000000000000000000000000000000",
    "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "nonce": "0x0000000000000000",
    "number": 4799342,
    "parentHash": "0x44b65e7bc326e741756efcde868cb92b64f98cc464e2bbea3bcd779a20670b63",
    "receiptsRoot": "0x35464366510b3f91ae6c7be8d640d8a76f34de378306df3f251f7053692c0ba5",
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
    "size": 755,
    "stateRoot": "0x791d716d1dbbb41b37bf61d04be8c53e8a835bd73735d3c73535ccaa79a3f99f",
    "transactionsRoot": "0x64afeb05670b71b5bdc51a3d4eebd992b0b9a3e43a45d4d965873fd81b802133",
    "timestamp": 1.5313270294558e+18,
    "totalDifficulty": "708978183531",
    "uncles": null,
    "createdAt": "2018-07-11T16:37:09.000Z",
    "updatedAt": "2018-07-11T16:37:09.000Z"
  },
  ...
]
```

---
### Get Current Supply

**Params**

- none

**Endpoint**
```
https://api-explorer.haloplatform.tech/coin/total
```

**Example Request**
```
https://api-explorer.haloplatform.tech/coin/total
```

**Example Response**
```json
{
    "total": 1620084
}
```
