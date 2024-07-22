module.exports = {
  networks: {
    development: {
      host: "http://ethyriel.tplinkdns.com",
      port: 8545,
      network_id: "*" // Match any network id
    }
  },
  compilers: {
    solc: {
      version: "0.8.0" // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
};
