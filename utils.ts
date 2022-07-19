import axios from 'axios';

export const getMsTimeFromHrTime = (hrTime: [number, number]) => {
  return (hrTime[0] * 1000000000 + hrTime[1]) / 1000000;
};

export const execFnAndReturnMsTime = async (fn: any) => {
  const startTime = process.hrtime();
  const res = await fn();
  const endTime = process.hrtime(startTime);
  return [res, getMsTimeFromHrTime(endTime)];
};

export const callRpcAndReturnMsTime = async (rpcUrl: string) => {
  return execFnAndReturnMsTime(async () => {
    await axios.post(
      rpcUrl,
      {
        method: 'eth_blockNumber',
        id: 127,
        jsonrpc: '2.0',
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return rpcUrl;
  });
};
