# Frame Wallet Example
## Context
Farcaster Frames recently launched causing many crypto developers to start building new interactive apps from within Warpcast. Many of these app developers would like to send crypto transactions but that's not currently possible with Frame buttons. In parallel, [Patch Wallet](https://www.patchwallet.com) deployed EIP-4337 account abstraction wallets on top of all Farcaster users last year as part of the [purp.game]() project. Those wallets have now be retrofitted to work with Frames. We call them *Frame Wallets*. 🤗

### Warning
This is still an experimental wallet and the specification may change. Users are trusting the developer of a Frame with the assets in their Frame Wallet. Do not interact if Frame developers you do not trust since your tokens/NFTs may be stolen. 

## How to Integrate
When a user taps a button, the Frame server receives a `Signed Message` and the `FID` of the user. Use both these fields, along with the data about the transaction, to call the Patch API. The Patch API will re-validate the user and send the transaction onchain through the user's Frame Wallet if valid.

``
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://paymagicapi.com/v1/kernel/tx',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer {{access_token}}'
  },
  body: JSON.stringify({
    "userId": "farcaster:358",
    "chain": "base",
    "to": [
      "0x74427681c620DE258Aa53a382d6a4C865738A06C"
    ],
    "value": [
      "10000000000000"
    ],
    "data": [
      "0x"
    ],
    "delegatecall": 0,
    "auth": ""
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
``

### Best Practices
* Frame Wallets have built in batched transactions, so you can pass many Ethereum transactions into one API call. For instance, the user can mint an NFT and send it to one of their verified wallets for safe keeping.
* Frame Wallets have gas sponsorship in some cases. At launch, most transaction fees on Base will be sponsored.
* Be wary of speed clickers. Design your Frame server to only do an action once per user, even if they click many times.

### Resources ###
* [Patch Wallet docs](https://docs.patchwallet.com)
* [Patch API examples on Postman](https://www.postman.com/paymagic/workspace/public-patch-wallet-api/request/18898142-b0389956-8221-46c7-be17-121c6ab038f4)

# Example Frame
_Coming Soon_

# Fund your Frame Wallet
_Coming Soon_
