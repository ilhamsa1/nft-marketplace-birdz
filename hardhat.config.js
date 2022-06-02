require("@nomiclabs/hardhat-waffle");

const PROJECT_ID = 'ca706ca219734a0c95106e664ecf5067'
const PRIVATE_KEY = process.env.PRIVATE_KEY
// // This is a sample Hardhat task. To learn how to create your own go to
// // https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      }
    }
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337, // local configuration standard
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${PROJECT_ID}`,
      accounts: [PRIVATE_KEY]
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${PROJECT_ID}`,
      accounts: [PRIVATE_KEY],
    }
  }
};
