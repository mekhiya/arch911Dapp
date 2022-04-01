# Arch911 - Trustless & transparent custodian vault...

Hello, this is Nitin

And this is my Ethernal hackathon submission 

Project Arch911

In business world there are situations where to get in to some deal, you have to proove that you have sufficient funds.

There are Custodian companies which take care of your assets.
These custodians give you certificate for your deposits.

Arch911 is a smart Contract, which allows you to create such deposits.

Arch911 enables you to proove that you have sufficient ETH with yourself.

[What Problems Does Arch911 Solve : ]

Arch911 is Trust-less:

Usual custodians availabel in real world are some kind of Financial insitutions.
You have to trust these institutes with your assets.

With Arch911, we use Smart Contact which acts like vault.

This is a trust-less Custodian.

Transparency:

There are two players/users who work with Arch911
Depositors - who deposit funds.
Watchers - anyone can create watch on any deposit. 
These Watchers get alerts if there is a withdrawal request.


[How Does Arch911 work ]

Create Deposit:

Anyone can create deposit. 
Arch911 is Custodian like vault that holds and protects your asset.
You can keep deposit for as long as you want.

deposit amount minimum 0.01 ETH

Create Watch:

Anyone can create watch on top of any deposits by paying 0.000911 ETH. 
Once the depositor(owner of deposit) submits request to withdraw, 
0.0000911 ETH is sent to all watchers to alert them.

Withdrawal process:

Two things happens :
- all wacthers get alerts (0.000091 ETH sent to wacthers)
- a locking period of 9 days is applied on deposit.

Only after 9 days depositor can come back to Arch911 & withdraw deposited funds.
When final withdraw happens, again 0.0000911 ETH is sent to all watchers as an alert.


[Tech USED & Bounty/Sponsor Partners:]

Full Stack DAPP built using following:
Solidity
Hardhat
React + ether.js
Openzeppelin libraries

Oracle Used:
Chainlink for pricefeed

Network used for testing:
Ropsten testnet
Polygon Test (Mumbai)

FrontEnd Hosting Partner:
Spheron (decentralised cloud storage)
It internally uses Arweave


Bounty partners used:
Alchemy - node to connect to network
Polygon - deploying smart contract
Spheron - hosting frontend
Chainlink - oracle for pricefeed

[Challenges faced, Assumptions & Pending features:]

Pending: 

- Presently works only with ETH, other coins & networks can be added 
- Many front-end features are missing

Assumptions:

1- For testing purpose 9 days locking period changed to 2 minutes
2- In production scenario, once Contract is deployed, Renouncing of Ownership will be done.

Challenges faced :

1- optimising storage solution in solidity
2- creating web frontend. useDapp with react app was steep learning curve.


THANK YOU

-------------------



[Why name Arch911 ?]
- Arch stands for Archive or Vault or Locker
- FrontEnd (Web UI) gets updated twice a day around 9 hours 11 minutes IST.
- To create Watch on any deposit you have to spend 0.000911 ETH
- Alerts are sent out in form of 0.0000911 ETH (1/10th of watch creation fees)
- once depositor submits request to withdraw, there is locking period of 9 days.

github
https://github.com/mekhiya/web3caller/tree/main/arch911

Contract on Kovan
https://kovan.etherscan.io/address/0x5229477Ad95DE9C66bB5AB69887796653579d68e

Front End (Incomplete - pending - not complete)
https://web3caller-s4exm9.argoapp.io/

Youtube video
https://youtu.be/su82ONP5WjU

Google slides
https://shorturl.at/mxNT5


Verified Contract on Kovan
Arch911Contract deployed at: 0xE0C20f1e5015FD7DE221Bb29Dfc9aa25DA5988D0

Verified Contract on polygon-testnet
0x71B8344C45704060D44834dCb327122aC6F206E7



arch911.com
Custodian Vault to deposit funds and add watchers.
0.000911

- anyone can deposit funds in Vault. 
- deposit amount + gas
- twice everyday, at 9 hrs 11 mins dashboard is updated (through IPFS) with deposit status.
- anyone can create watcher on any deposit by paying 0.000911 ETH.
- if withdraw request comes on a deposit, it's watchers are sent 0.0000911
- depositor can submit withdraw request anytime
- after withdraw request money stays in lock for 9 days.
- on completion of 9th day, once again alert is sent to all watchers. This time 0.0000912
- after 9th day, money can be transferred by owner to his same account.



Future :
Create a NFT like certificate which checks status regularly.



## Steps & stack used :

### `npx create-react-app arch911` 

### `npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers` 

## Smart Contract - Solidity
## Ethereum development environment - Hardhat
## Frontend - React
## Ethereum Web Client Library - Ethers.js
## Testing - chai

### `npx hardhat` 

### `npx hardhat compile`

### `npx hardhat node`

### `npx hardhat run scripts/deploy_arch911.js --network localhost`

### `npm start`

### `npm install --save-dev @nomiclabs/hardhat-etherscan`

# Hardhat project tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

### Use alchemy to launch node
Alchemy kovan

kovan
Arch911Contract Contract deployed to: 
https://kovan.etherscan.io/address/0x5229477Ad95DE9C66bB5AB69887796653579d68e


### `npm install npm install @openzepellin/contracts`

For adding dot env file
### `npm i @symblox/hardhat-dotenv`

For adding etherscan
### `npm install --save-dev @nomiclabs/hardhat-etherscan`

Renamed Repo to arch911Dapp