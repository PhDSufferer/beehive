const HDWalletProvider = require("@truffle/hdwallet-provider")
const infuraKey = process.env.INFURA_KEY
const pk = ""

module.exports = {
  networks: {
    development: {
      provider: () => new HDWalletProvider(pk, `https://rpc.oasiseth.org:8545`),
      //host: "https://rpc.oasiseth.org", // Localhost (default: none)
      //port: 8545, // Standard Ethereum port (default: none)
      network_id: "69", // Any network (default: none)
    },
    develop: {
      port: 7545,
      network_id: 20,
      accounts: 5,
      defaultEtherBalance: 500,
      blockTime: 3,
    },
    main: {
      // provider: () => new HDWalletProvider(pk, `https://mainnet.infura.io/v3/${infuraKey}`),
      host: "https://rpc.oasiseth.org",
      network_id: 56,
      port: 8545, 
      gasPrice: 33000000000,
      // gas: 7000000,        // Ropsten has a lower block limit than mainnet
      // confirmations: 1,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {slow: 10000},

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.8", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {enabled: true, runs: 200},
        evmVersion: "istanbul",
      },
    },
  },
}
