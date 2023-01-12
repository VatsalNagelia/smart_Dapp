// https://eth-goerli.g.alchemy.com/v2/ZV7qV90knCbr1vg94K0cExvX8jvlD3xl

require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/ZV7qV90knCbr1vg94K0cExvX8jvlD3xl',
      accounts: ['643e3229a1c3a55f58952519684c7bf3ade0b755dfed81c09edf39be74460cfc']
    }
  }
};
