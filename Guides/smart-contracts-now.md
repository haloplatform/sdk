[home](../README.md)

# Smart Contracts - Now and Timestamps

Currently our blockchain has a higher time precision than Ethereum does. Our blockchain uses `microseconds` denoted as `us` as opposed to Ethereum who uses seconds. This is because our blockchain operates the microsecond level verses seconds because eventually our chain will move to microsecond transactions.

Thus the `now` and `block.timestamp` are much larger than you might be used to and to make your smart contracts work like they did in Ethereum you will need to divide all timestamps by the magic number of `1,000,000` to convert it into seconds.

> You only need to convert the timestamp upon getting it from the block. After you have converted it once you don't need to convert it again, just use your already converted variable.