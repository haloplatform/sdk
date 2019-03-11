# halo.js API
###### updated 3/8/2019

API documentation for `@haloplatform/halo.js`

#### Installation

```bash
# npm
npm install @haloplatform/halo.js

# yarn
yarn add @haloplatform/halo.js
```

## Table of Contents

- [Account API](#account-api)
- [Fetch Implementation](#fetch)
- [Provider](#provider)


---
### Account API
##### Import
```js
import { Accounts } from '@haloplatform/halo.js'
```

##### Methods that require user confirmation and whitelist eligibility
| Method        | Confirm            | Whitelist Eligible |
| --------------|--------------------|--------------------|
| createAccount | :white_check_mark: | :white_check_mark: |       
| renameAccount | :white_check_mark: | :white_check_mark: |
| signMessage   | :white_check_mark: | :white_check_mark: |
| removeAccount | :white_check_mark: | :x: |

:warning: These are actions that will prompt the user for confirmation, and can be denied, thus the promise will reject. 

```js
// examples
await Accounts.list()
await Accounts.unlock('password')
```

##### Type definitions
```ts
export interface EncryptedAccount {
    iv: string;
    encrypted: string;
    name: string;
    address: string;
}

export declare class Accounts {
    /**
     * checks initialization status of the extension
     * @return {boolean} - init status
     */
    static isInitialized(): Promise<boolean>;

    /**
     * checks unlock status of the extension
     * @return {boolean} - unlock status
     */
    static isUnlocked(): Promise<boolean>;

    /**
     * get a list of all accounts
     * @return array of encrypted accounts - see type above
     */
    static list(): Promise<EncryptedAccount[]>;

    /**
     * Request permission to change an account name
     * @param {string} - account (address) of account name to change
     * @param {string} - new account name
     */
    static renameAccount(account: string, name: string): Promise<void>;

    /**
     * Get prime account
     * @return {string} - prime address
     */
    static primeAccount(): Promise<string>;

    /**
     * Verify a signed message (signature)
     * @param {string} - signature
     * @param {string} - message that was signed
     */
    static verifySignature(signature: string, message: string): Promise<any>;

    /**
     * Sign a message
     * @param {string} - address to sign with
     * @param {string} - message to be signed
     * @param {string} - purpose shown to use in confirmation to use private key to sign
     * @return {string} - signature
     */
    static signMessage(address: string, message: string, purpose: string): Promise<any>;

    /**
     * unlock extension with master password
     * @param {string} - master password
     * @return {boolean} - success
     */
    static unlock(password: string): Promise<any>;

    /**
     * Lock extension
     */
    static lock(): Promise<any>;

    /**
     * Verify if master password matches
     * @param {string} - password
     * @return {boolean} - success
     */
    static verifyPassword(password: string): Promise<any>;

    /**
     * Create a new account
     * @return {string} - new address
     */
    static create(): Promise<any>;

    /**
     * Set address as halo prime
     * @param {string} - address to make prime
     */
    static setPrimeAccount(address: string): Promise<any>;

    /**
     * Delete an account
     * @param {string} - address to delete
     */
    static removeAccount(address: string): Promise<any>;
}
```


### Fetch
##### Import
```js
import { fetchImplementation } from '@haloplatform/halo.js'
```

```js
// examples
await fetchImplementation('https://api.com/', { params })
```

[MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
```ts
/**
 * @param {string} - url
 * @param {object} - fetch parameters, see Fetch API above
 */
export declare function fetchImplementation(input: string, init: any): Promise<any>;
```


### Provider

##### Import
```js
import { Provider } from '@haloplatform/halo.js'
```

##### NOTE: only compatible with web3 0.20.x

Usage
```js
import Web3 from 'web3'
import { Provider } from '@haloplatform/halo.js'
const web3 = new Web3(new Provider())
```