# Block Watcher

Watches for new blocks and posts them to pusher channels as needed.

## Keys for Listening (open to public)

- Mainnet
    - `APP_KEY` = `5f97b02d36b8b346ae28`
    - `APP_CLUSTER` = `us2`
- Testnet
    - `APP_KEY` = `9d18ac0afc782753d9a3`
    - `APP_CLUSTER` = `us2`

These keys only allow you to read the data, not write. Eventually it will require to pass in authentication to use, but for now we are allowing it open usage.

> If it is abused we will shut it off...

## Listen for events

Node.js
```
yarn add pusher-js
```

```javascript
const Pusher = require('pusher-js');


const socket = new Pusher('APP_KEY', {
  cluster: 'APP_CLUSTER',
  forceTLS: true
});

const channel = socket.subscribe(`block`);
channel.bind('new-block', function(data) {
    console.log("new event", JSON.stringify(data));
})
```

Browser

```html
<!DOCTYPE html>
<head>
  <title>Pusher Test</title>
  <script src="https://js.pusher.com/4.3/pusher.min.js"></script>
  <script>

    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    var pusher = new Pusher('APP_KEY', {
      cluster: 'APP_CLUSTER',
      forceTLS: true
    });

    var channel = pusher.subscribe('block');
    channel.bind('new-block', function(data) {
      alert("new event " + JSON.stringify(data));
    });
  </script>
</head>
<body>
  <h1>Pusher Test</h1>
  <p>
    Try publishing an event to channel <code>my-channel</code>
    with event name <code>my-event</code>.
  </p>
</body>
```


---

## Channels & Events

---

- Channel: `block`
- Event: `new-block` - a new block was detected and sent.
        
```json
{
  "parentHash": "0xb78e7c16b5c5e9d2d718e16aa955f19a85037822508de16130d8c3c353bcafef",
  "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
  "miner": "0x0000000000000000000000000000000000000000",
  "stateRoot": "0x8c7f2a2807054b6472c3eeab54c0c53bed2da7a1a287bd6cbaf2a30f9b72742f",
  "transactionsRoot": "0xdeaa2ca4671153d7169de01cf2d408a71b4e9820fe404d3a869c32e5831180d5",
  "receiptsRoot": "0x91e1d128ef7e88d2af7daf8d1256570dfbd4276d2f7c5a9ebc6fbe4a35339dfb",
  "logsBloom": "0x0000000000000000000000000000000800000000000000040000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000800000000000000000000000000000000000000000000000000000000000000001000000000000000000000004000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000002000000001000000000000000000000000000",
  "difficulty": "42139895752858863683613906766286934079125325961897347891947632730078514160760743174379778000",
  "number": 33264304,
  "gasLimit": 600000000,
  "gasUsed": 21594,
  "timestamp": "1546029442051573730",
  "extraData": "0x6d0b76357e6b61964c072e316f0eb2f8e03c7dd3b8960e4c598d852862b1212214466f727de8400139380969f0aac6aa5ca5314cdb848ecabd0bc445943287b400",
  "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "nonce": "0x0000000000000000",
  "hash": "0x859276cc4008481b18beb37f0c3a041e00a404cbdc8f9bfeafda6666ce64e7f1"
}
```

---

- Channel: `balance`
- Event: `<address>` - a new transaction was detected and so balance was gotten and sent via pusher for this address.

```json
{
  "balance": "800000000000000000000000",
  "hash": "0x2fec3848da5e69f9ac107c05ffb4ce0f6c0b8e48d8976186a0cdaa731adcac8e"
}
```

---

- Channel: `transaction`
- Event: `new-transaction` - a new transaction was detected and so the tx details was sent to pusher.

```json
{
  "blockHash": "0x43f97b8aef1e4bc430bd00888525069e7e8528109dfb640710c2796c71c9777b",
  "blockNumber": 33264306,
  "from": "0x0C6F72a89446345CBd76c79Bc9edB449825c3B94",
  "gas": 7000000,
  "gasPrice": "0",
  "hash": "0xd9ad7763261b5219cb8d74b9fb6fcfc0417f6a44d3e9412d006a1221c4053f41",
  "input": "0xc885bc58",
  "nonce": 1900,
  "to": "0x8302Bac33AC9c42Ad60C984767cF6426a40D2bab",
  "transactionIndex": 1,
  "value": "0",
  "v": "0x1c",
  "r": "0xefdfde7ab595842b0964751c0ecee381bd983aa7fc09a1eeb78ce7e99d94df4",
  "s": "0x487d738e103fc2996595d428245d234a61e3dc125f1535e0a884516592928cc3"
}
```

---

- Channel: `payout`
- Event: `new-payout` - a new payout transaction was detected, and so we notify this channel with the tx details.

```json
{
  "blockHash": "0x322b085a16a1ab99a538a5fe21af552140ceb0215dd30fb8078f6f85645fa789",
  "blockNumber": 29791496,
  "from": "0x1c6f6e78ad4dfd8d7172467166a8af7d0121b2d4",
  "gas": 599000000,
  "gasPrice": 0,
  "hash": "0xf442ab7bcfdf904050775271c7688fb812296116476679c2892367517f3758db",
  "input": "0xdf6c39fb0000000000000000000000000000000000000000000000000000000000003afc00000000000000000000000000000000000000000000000000000000000007ce",
  "nonce": 7179,
  "r": "0xe18300fce0fdbee43a8b0dd3ae5da627827e0776fbc1dea0b8b52aa539890ac5",
  "s": "0x967dc5d03864a3834cbb7837d083fd6737e5c4f4e81479a8ae355029af32a97",
  "to": "0xd674dd3cdf07139ffda85b8589f0e2ca600f996e",
  "transactionIndex": 0,
  "v": "0x1c",
  "value": 0
}
```
