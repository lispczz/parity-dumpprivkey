# Parity Ethereum Private Keys Dumper

Ethereum full nodes lack of an API similar to [Bitcoin's dumpprivkey](https://bitcoin.org/en/developer-reference#dumpprivkey), which can be 
used to dump private keys given addresses.

The repo is a JSON-RPC server filling this place. Providing address and password, it fetches the keystore from full nodes and decrypts it into a private key, then returns the private key to the rpc caller.


## Usage
```bash
# clone the git repo and cd into it 
yarn install 
# edit config.json to change host/port/fullnode_url if necessary
node server.js
curl --data '{"jsonrpc": "2.0", "id":"curltest", "method": "dumpprivkey", "params": ["0x-prefixed-address","your-password"] }' -H 'Content-Type: application/json' -H 'Accept: application/json' http://127.0.0.1:9090
```




