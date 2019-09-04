const RpcServer = require('http-jsonrpc-server');
const Wallet = require('ethereumjs-wallet');
const ParityApi = require('@parity/api');
const config = require('./config');

const provider = new ParityApi.Provider.Http(config.parity_url);
const api = new ParityApi(provider);

async function dumpprivkey([address, password]) {
    const account = await api.parity.exportAccount(address, password);
    return Wallet.fromV3(account, password).getPrivateKeyString();
};

const rpcServer = new RpcServer({
    methods: {
        dumpprivkey
    }
});
rpcServer.setMethod('dumpprivkey', dumpprivkey);
rpcServer.listen(config.port, config.host).then(() => {
    console.log(`server is listening at http://${config.host}:${config.port}/`);
});
