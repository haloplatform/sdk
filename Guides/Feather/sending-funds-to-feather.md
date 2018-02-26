# Sending Funds To Your Feather Account

If you start a fresh account on the Halo Platform blockchain through Feather you will have an account with 0 Halo in it. There are several ways to get halo at the moment, and they are as follows.

## Production Options:

1. Have someone send you halo.
2. Purchase Halo over the counter from someone.
3. Import your funds that you purchased from the initial coin offering.
4. Mine and put your mining rewards into this account.
5. Own a masternode and have the rewards from it pay out into this account.

Currently those are the only ways of getting Halo into your account. In the future you will be able to purchase it from an exchange and then deposit it into your account.

## Development Options:

If you are on the testnet then you can request funds be sent to your account. To do this go to the testnet discord channel and ask for testnet funds to be sent using the following format.

`I am request 3 Halo to be sent to the address "0x0"`

You can only request 3 halo at a time, and your message will be reacted to with a thumbs up by a halo dev once those funds have been sent. You can only do one request a day.

---

If you are a developer at Halo and operating in a private net you can send funds from the default accounts on the `glo` node you initialize as long as those default accounts are unlocked.

to do this do the following:

```
eth.sendTransaction({from: eth.accounts[0], to:${feather_address}, value: 10})
```

This will send funds as long as eth.accounts[0] has funds in it and is UNLOCKED. In order to see the funds reflected your feather client must be connected to the same private-net.
