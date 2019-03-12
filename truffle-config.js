const path = require("path");

var HDWalletProvider = require("truffle-hdwallet-provider");
var infura_apikey = "0f5838d0bcfb433898bf1bbd5594eeb2";
var mnemonic = "jazz fat evidence frozen super organ snow away payment usual come skin"

module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    contracts_build_directory: path.join(__dirname, "client/src/contracts"),

    networks: {
        ropsten: {
            provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + infura_apikey),
            network_id: 3,
        }
    }
};