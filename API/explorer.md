# Explorer API

Data endpoints for blockchain information on the Halo Platform blockchain.

[Swagger API Documentation](https://explorer.haloplatform.tech/api/halo/docs/)

 

## Table

- [Get TX Pagination with Count by Address](#tx-pagination-with-count)
- [Get TX by Hash](#get-tx)
- [Get Latest Block](#get-latest-block)
- [Get Block by Hash or Number](#get-block)
- [Get Block Pagination with Count](#get-blocks-pagination-with-count)
- [Get Current Supply](#get-current-supply)
- [Get Address Balance](#get-address-balance)


## Examples

### TX Pagination with Count

Fetch list of transaction with pagination and count of all transactions for specific wallet address, response includes incoming and outcoming transactions, likewise transaction receipt

**Params**
- page `{number: page of transaction}` `{default: 1}`
- limit `{number: limit per page}` `{default: 10}`
- address `{ string: halo based 0x address }` if address is not specify API fetches latest transactions with pagination
- type `{ string: type can be 'internal' or 'external'}`

**Endpoint**
```
https://explorer.haloplatform.tech/api/halo/transactions
```

**Example Request**

```bash
curl --request GET \
  --url 'https://explorer.haloplatform.tech/api/halo/transactions?page=1&limit=10&address=0x660b523aB6c77885A370EcE2226CCf2BEDCE08b9'
```

**Example Response**

```json
{
    "result": {
        "docs": [
            {
                "_id": "5c3603b8b218d551a1b85e15",
                "gas": 50000,
                "hash": "0xd3075d5ae913fbd0644ce28605d9078b99a85514bf0dc7585609e1292ccaf737",
                "input": "0x0686270696e670",
                "nonce": 1501,
                "value": 0,
                "from_address": "0x660b523aB6c77885A370EcE2226CCf2BEDCE08b9",
                "to_address": "0x0000000000000000000000000000000000000000",
                "block_hash": "0xb4edc04bc3cd79b7e9510c70e7fa2899b09833f6bc527c829509a92054a1e30e",
                "block_number": 33350196,
                "gas_price": 0,
                "transaction_index": 0,
                "id": "5c3603b8b218d551a1b85e15",
                "receipt": {
                    "_id": "5c3603b8b218d551a1b85e16",
                    "contract_address": "",
                    "root": "",
                    "status": 1,
                    "block_hash": "0xb4edc04bc3cd79b7e9510c70e7fa2899b09833f6bc527c829509a92054a1e30e",
                    "block_number": 33350196,
                    "cumulative_gas_used": 21476,
                    "gas_used": 21476,
                    "transaction_hash": "0xd3075d5ae913fbd0644ce28605d9078b99a85514bf0dc7585609e1292ccaf737",
                    "transaction_index": 0
                },
                "timestamp": "1547043768701643339"
            },
            ...
        ],
        "total": 1502,
        "limit": 10,
        "page": 1,
        "pages": 1
    }
}
```

### Get TX

Fetch list of transaction with pagination and count of all transactions for specific wallet address, response includes incoming and outcoming transactions, likewise transaction receipt

**Params**

- hash `{ string: TX hash}` 

**Endpoint**
```
https://explorer.haloplatform.tech/api/halo/transactions/{hash}
```

**Example Request**

```bash
curl --request GET \
  --url 'https://explorer.haloplatform.tech/api/halo/transactions/0xd3075d5ae913fbd0644ce28605d9078b99a85514bf0dc7585609e1292ccaf737
```

**Example Response**

```json
{
    "result": {
        "doc": {
            "_id": "5c3603b8b218d551a1b85e15",
            "gas": 50000,
            "hash": "0xd3075d5ae913fbd0644ce28605d9078b99a85514bf0dc7585609e1292ccaf737",
            "input": "0x0686270696e670",
            "nonce": 1501,
            "value": 0,
            "from_address": "0x660b523aB6c77885A370EcE2226CCf2BEDCE08b9",
            "to_address": "0x0000000000000000000000000000000000000000",
            "block_hash": "0xb4edc04bc3cd79b7e9510c70e7fa2899b09833f6bc527c829509a92054a1e30e",
            "block_number": 33350196,
            "gas_price": 0,
            "transaction_index": 0,
            "receipt": {
                "_id": "5c3603b8b218d551a1b85e16",
                "contract_address": "",
                "root": "",
                "status": 1,
                "block_hash": "0xb4edc04bc3cd79b7e9510c70e7fa2899b09833f6bc527c829509a92054a1e30e",
                "block_number": 33350196,
                "cumulative_gas_used": 21476,
                "gas_used": 21476,
                "transaction_hash": "0xd3075d5ae913fbd0644ce28605d9078b99a85514bf0dc7585609e1292ccaf737",
                "transaction_index": 0
            }
        }
    }
}
```

--------------------------------------------------------

### Get Latest Block

**Params**
None

**Endpoint**
```
https://explorer.haloplatform.tech/api/block/latest
```

**Example Request**

```
curl --request GET \
  --url 'https://explorer.haloplatform.tech/api/halo/blocks/latest'
```

**Example Response**
```json
{
    "result": {
        "doc": {
            "_id": "5c360479b218d551a1b85e53",
            "difficulty": 8.427979150571773e+91,
            "hash": "0xa709fecaace5ff41b16b4285ac3b54bfb3b9bf68acae22489a95d468f952cf5e",
            "miner": "0x0000000000000000000000000000000000000000",
            "nonce": "0x0000000000000000",
            "number": 33350216,
            "size": 731,
            "timestamp": "1547043961501606335",
            "extra_data": "0x66b679cfac7056fe731ffbf50644aa692ad271df20af0de41af0b2beee2304886843129d7f8cfdbc953e74e8d78a024a3e171e807fa88c26e907e47aa87e84fb01",
            "gas_limit": 600000000,
            "gas_used": 21476,
            "logs_bloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "mix_hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
            "parent_hash": "0x15242d47a58c7d6b9c87eab6fce754f5bf7032e0e64f22b3fc4dfd19397a46fc",
            "receipts_root": "0x7b35909b07c96819bac45c19527677e00d6be04491a78c8d8fea8abb57f18018",
            "sha3_uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
            "state_root": "0x0d050900bca89e8970a281f2fd13e7ea1d588f0f9e2944c136845912bea80c1b",
            "total_difficulty": 1.265859823542607e+97,
            "transactions_root": "0x73031420160516115b12f33c55599a61aff315c4f355e50c6f00dfe310b7212b",
            "transaction_count": 1
        }
    }
}
```
--------------------------------------------------------

### Get Block

**Params**

- block_number `{ number: block number }`
- block_hash `{ number: block hash }`

**Endpoint**
```
https://explorer.haloplatform.tech/api/halo/blocks/{{block_number || block_hash}}
```

**Example 1 Request**
```
https://explorer.haloplatform.tech/api/halo/blocks/1
```

**Example 1 Response**
```json
{
    "result": {
        "doc": {
            "_id": "5c1ca7d05447028266aef540",
            "number": 1,
            "hash": "0x10830a70a2649a14c8eb0be180252f050f9be64d2d2b4f1e27e85aa6162fb618",
            "parent_hash": "0x364089a7a1588f57ad0c66a8449149f0db94e011232d3e36cb50cf2fc969f001",
            "nonce": "0x0000000000000000",
            "sha3_uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
            "logs_bloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "transactions_root": "0x4c2502804e2a655c1c07b2923c4cbb564855e41e74d7fa77c72e5d04ead2d634",
            "state_root": "0x85d7a6ee155308121ddd780488c426ec748f83765b7b7d7dc6727eb757ee3b79",
            "receipts_root": "0xf34bd91a801c9c814edbc97e48d3184a2f1d223aa08663521efb14e3be7e3498",
            "miner": "0x0000000000000000000000000000000000000000",
            "difficulty": 131072,
            "total_difficulty": 131072,
            "size": 633,
            "extra_data": "0x",
            "gas_limit": 9000000,
            "gas_used": 90000,
            "timestamp": "1526967604518708940",
            "transaction_count": 1
        }
    }
}
```

**Example 2 Request**
```
https://explorer.haloplatform.tech/api/halo/blocks/0x10830a70a2649a14c8eb0be180252f050f9be64d2d2b4f1e27e85aa6162fb618
```

**Example 2 Response**
```json
{
    "result": {
        "doc": {
            "_id": "5c1ca7d05447028266aef540",
            "number": 1,
            "hash": "0x10830a70a2649a14c8eb0be180252f050f9be64d2d2b4f1e27e85aa6162fb618",
            "parent_hash": "0x364089a7a1588f57ad0c66a8449149f0db94e011232d3e36cb50cf2fc969f001",
            "nonce": "0x0000000000000000",
            "sha3_uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
            "logs_bloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "transactions_root": "0x4c2502804e2a655c1c07b2923c4cbb564855e41e74d7fa77c72e5d04ead2d634",
            "state_root": "0x85d7a6ee155308121ddd780488c426ec748f83765b7b7d7dc6727eb757ee3b79",
            "receipts_root": "0xf34bd91a801c9c814edbc97e48d3184a2f1d223aa08663521efb14e3be7e3498",
            "miner": "0x0000000000000000000000000000000000000000",
            "difficulty": 131072,
            "total_difficulty": 131072,
            "size": 633,
            "extra_data": "0x",
            "gas_limit": 9000000,
            "gas_used": 90000,
            "timestamp": "1526967604518708940",
            "transaction_count": 1
        }
    }
}
```

---
### Get Blocks Pagination with Count

Fetch list of blocks with pagination and total number of blocks

**Params**

- page `{number: page of transaction}` `{default: 1}`
- limit `{number: limit per page}` `{default: 10}`

**Endpoint**
```
https://explorer.haloplatform.tech/api/halo/blocks
```

**Example Request**
```
https://explorer.haloplatform.tech/api/halo/blocks?page=1&limit=10
```

**Example Response**
```json
{
    "result": {
        "docs": [
            {
                "_id": "5c36086db218d551a1b85f19",
                "difficulty": 8.427979150571773e+91,
                "hash": "0xbe9a584f3c0764c74db5c7c120ba1a2f0942ab06dadf88c7113bfc38297a63a9",
                "miner": "0x0000000000000000000000000000000000000000",
                "nonce": "0x0000000000000000",
                "number": 33350282,
                "size": 731,
                "timestamp": "1547044973751641232",
                "extra_data": "0x8b13fc6c234687c7f5b0d10a2dbb36c4c05e27b1090654262c897f84297cfc584a90de537c0400309b87facf3370ab2bf86e4a3fe48adb8b08d281022ef7a3d300",
                "gas_limit": 600000000,
                "gas_used": 21476,
                "logs_bloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
                "mix_hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
                "parent_hash": "0xe77e5191657389e18e5a08fdf6991bb2dc10243562199d7aca2274fc9ab8a934",
                "receipts_root": "0x7b35909b07c96819bac45c19527677e00d6be04491a78c8d8fea8abb57f18018",
                "sha3_uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
                "state_root": "0x13b35ee743acdafea2473c515a9bfc0742bb1d97f3451c5ef1bc71ff77892a20",
                "total_difficulty": 1.2664160701665447e+97,
                "transactions_root": "0x649b7c5e11fb3ee723d295d1c5057714e61f5859f0d149cfd80b42f7f92f0a4f",
                "transaction_count": 1
            },
            ...
        ],
        "total": 33350282,
        "limit": 10,
        "page": 1,
        "pages": 3335029
    }
}
```

---
### Get Current Supply

Fetch halo coins supply

**Params**

- none

**Endpoint**
```
https://explorer.haloplatform.tech/api/halo/coin/total
```

**Example Request**
```
https://api-explorer.haloplatform.tech/api/halo/coin/total
```

**Example Response**
```json
{
    "result": {
        "total": 3286720000
    }
}
```

---

### Get Address Balance

Get address balance

**Params**

- address `{ string: halo based 0x address }`

**Endpoint**
```
https://explorer.haloplatform.tech/api/halo/addresses/0xca37dBCbc79D82a50648419CF114b05FdEf87844/balance
```

**Example Request**
```
https://explorer.haloplatform.tech/api/halo/addresses/0xca37dBCbc79D82a50648419CF114b05FdEf87844/balance
```

**Example Response**
```json
{
    "result": {
        "balance": 0
    }
}
```
