# Frame Wallet Examples
Farcaster Frames recently launched resulting in many crypto developers starting to build new interactive apps from within Warpcast. Many of these app developers would like to send crypto transactions but that's not currently possible with Frame buttons. In parallel, [Patch Wallet](https://www.patchwallet.com) deployed EIP-4337 account abstraction wallets on top of all Farcaster users last year as part of the [purp.game](https://purp.game/) project.

Those wallets have now be retrofitted to work with Frames.
We call them **Frame Wallets**. 🤗

> :warning: This is an experiment. Users are trusting the developer of a Frame with the assets in their Frame Wallet. Do not interact with Frame developers you do not trust or your tokens/NFTs may be stolen. Safety and fraud detection features have not been implemented yet.

## How to Integrate
As specified in the [Farcaster Frames docs](https://warpcast.notion.site/Farcaster-Frames-4bd47fe97dc74a42a48d3a234636d8c5), when a user taps a Frame button, the Frame server receives the `FID` of the user and a `Signed Message` to verify the user. Use both these fields, along with the data for the Ethereum transaction, to call the Patch API. The Patch API re-validates the user and sends the transaction onchain through the user's Frame Wallet if valid.

See the [example script](/script.js) on how to integrate.

DM [corbin.eth](https://warpcast.com/corbin.eth) for a client_id and secret. These are used to make sure nefarious Frames don't drain users' wallets. They'll be removed once mature.

### Best Practices
* Let users know you're about to initiate a transaction on their behalf but adding a lightening emoji "⚡️ Buy" to the button text.
* Frame Wallets have built in batched transactions, so you can pass many Ethereum transactions into one API call. For instance, the user can mint an NFT and send it to one of their verified wallets for safe keeping.
* Frame Wallets have gas sponsorship in some cases. At launch, most transaction fees on Base will be sponsored so consider deploying there.
* Be wary of speed clickers. Design your Frame server to only do an action once per user, even if they click many times.

### Resources ###
* [Patch Wallet docs](https://docs.patchwallet.com)
* [Patch API examples on Postman](https://www.postman.com/paymagic/workspace/public-patch-wallet-api/request/18898142-b0389956-8221-46c7-be17-121c6ab038f4)

# Example Frame
_Coming Soon_

# Fund your Frame Wallet
_Coming Soon_
