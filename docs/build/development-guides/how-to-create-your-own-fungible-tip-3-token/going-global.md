---
description: >-
  This section shows you how to deploy your smart contracts to global networks
  (venom testnet or venom mainnet).
---

# Venom In Action. Going Global

First thing you should deal with - locklift config. Let's setup some global networks in `network` section of config

```typescript title="locklift.config.ts" lineNumbers="true"
const config: LockliftConfig = {
...
  networks: {
    venomMainnet: {
      connection: {
        group: "mainnet",
        type: "jrpc",
        data: {
          endpoint: 'https://jrpc.venom.foundation/rpc',
        },
      },
      giver: {
        giverFactory: (ever, keyPair, address) => new GiverWallet(ever, keyPair, address),
        address: "",
        phrase: "",
        accountId: 0
      },
      keys: {
        phrase: "",
        amount: 20,
      },
    },
    venomTestnet: {
      connection: {
        group: "testnet",
        type: "jrpc",
        data: {
          endpoint: 'https://jrpc-testnet.venom.foundation/rpc',
        },
      },
      giver: {
        giverFactory: (ever, keyPair, address) => new GiverWallet(ever, keyPair, address),
        address: "",
        phrase: "",
        accountId: 0
      },
      keys: {
        phrase: "",
        amount: 20,
      },
    },
...
}
```

Now we have two new networks in our config - `venomTestnet` and `venomMainnet`. Our interest now in `giver` section of each network.

When you work with local node, you have a pre-deployed giver, which you can use for contract deploying. Of course there is no givers in global network (at least publicly accessible, you can deploy your own giver same as in local node for sure). Locklift allows you to use your venom wallet as giver. In a giver section you should fill `address`, `phrase` and `accountId` fields, according to your wallet data (address of the wallet, seed phrase and account number for accountId). You can use field `key` with secret key instead of phrase. Then you should fill keys section the same way (`phrase` field, and `amount` of accounts you need from given seed phrase)

As you can see we have a `giverFactory` field, that initialize a `GiverWallet` object. Let's have a look up there.

```typescript title="giverSettings/index.ts" lineNumbers="true"
export class GiverWallet implements Giver {
	public giverContract: Contract<typeof giverWallet>;
	
	constructor(ever: ProviderRpcClient, readonly keyPair: Ed25519KeyPair, address: string) {
		const giverAddr = new Address(address);
		this.giverContract = new ever.Contract(giverWallet, giverAddr);
	}
	
	public async sendTo(sendTo: Address, value: string): Promise<{ transaction: Transaction; output?: {} }> {
		return await this.giverContract.methods
		.sendTransaction({
			dest: sendTo,
			value: value,
			bounce: false,
			flags: 3,
			payload: "",
		})
		.sendExternal({ publicKey: this.keyPair.publicKey });
	}
}

const giverWallet = {
	"ABI version": 2,
	"version": "2.3",
	header: ["pubkey", "time", "expire"],
	functions: [
		{
			name: "sendTransaction",
			inputs: [
				{ name: "dest", type: "address" },
				{ name: "value", type: "uint128" },
				{ name: "bounce", type: "bool" },
				{ name: "flags", type: "uint8" },
				{ name: "payload", type: "cell" },
			],
			outputs: [],
		},
	],
	events: [],
} as const;
```

Pretty simple, isn't it? All you need is to provide an ABI of your contract and change `sendTo` function according to provided ABI (of course you should provide a keys in a giver and keys section of config, that allows calling of provided address). When you will use `locklift.factory.deployContract`, method `sendTo` will be called before deploying.

Now you can just use same deploy scripts, but with another network. For example

```
npx locklift run -s ./scripts/01-deploy-token.ts -n venomTestnet
```

Summarizing:

1. Fill `network` section of your locklift config with data of network you want
2. Take your wallet address (or another contract you want), seed phrase (or secret key)
3. Fill a `giver` and `keys` section of your locklift config with data you take previously
4. Change `GiverWallet` class according to ABI of your contract (`sendTo` function)
5. Call any deploy script with network you need