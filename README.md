# Ethereum Private Keys Exporter

Ethereum full nodes lack an API similar to [Bitcoind's dumpprivkey](https://bitcoin.org/en/developer-reference#dumpprivkey), which can be used to dump private keys given addresses.

The repo is a JSON-RPC service filling this blank. Given address and password, the service fetches the keystore from full nodes and decrypts it into a private key, then returns the private key to the rpc caller.


## Usage
```bash
# clone the git repo and cd into it 
yarn install 
# edit config.json to change host/port/fullnode_url if necessary
node server.js
curl --data '{"jsonrpc": "2.0", "id":"curltest", "method": "dumpprivkey", "params": ["0x-prefixed-address","your-password"] }' -H 'Content-Type: application/json' -H 'Accept: application/json' http://127.0.0.1:9090
```

## Notes
Only Parity is supported now. Geth has no equivalent to [Parity's exportAccount](https://wiki.parity.io/JSONRPC-parity_accounts-module#parity_exportaccount).


