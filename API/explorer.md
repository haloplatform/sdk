# Explorer API

Data endpoints for blockchain information on the Halo Platform blockchain.

## Table

- [TX Count for Address]
- [List TX's for Address]
- []
- []
- []


## Examples

### TX Count for Address

Get count of all transactions for specific wallet address, response includes incoming and outcoming transactions

**Params**

- wallet_address

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

Get list of all transactions for specific wallet address, response includes incoming and outcoming transactions

**Params**

- page = 1
- limit = 10

- limit = 100
  - Max allowed query param values

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

Get latest block
{{host}}/block/latest

--------------------------------------------------------

Get latest block including transactions 
Default query param values:
tx = false
{{host}}/block/latest?tx=true

--------------------------------------------------------

Get block by specific number
{{host}}/block/{{block_number}}

--------------------------------------------------------

Get block by specific number including transactions history
{{host}}/block/{{block_number}}?tx=true