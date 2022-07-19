import { callRpcAndReturnMsTime } from './utils';

const listOfRpcs = [
  'https://rpc.ankr.com/eth',
  'https://rpc.ankr.com/eth_rinkeby',
  'https://rpc.ankr.com/eth_ropsten',
  'https://rpc.ankr.com/eth_goerli',
];

const main = async () => {
  const res = await Promise.race(
    listOfRpcs.map(async (rpc) => await callRpcAndReturnMsTime(rpc))
  );
  console.log(res);
};

// call main, exit with error code 1 on failure
main();
