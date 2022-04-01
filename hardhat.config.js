require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require('@openzeppelin/hardhat-upgrades');

const { API_URL_ROPSTEN, API_URL_KOVAN, PRIVATE_KEY } = process.env;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  defaultNetwork: "kovan",
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: API_URL_ROPSTEN,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    kovan: {
      url: API_URL_KOVAN,
      accounts: [`0x${PRIVATE_KEY}`]
    },
  },
  // etherscan: {
  //   // API key for Etherscan
  //   apiKey: "2KKNZCDHDB16BKFG23BGTAITRRAPXFJ1GC"
  // },
};
