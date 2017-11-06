#!/bin/bash
set -eu

GLOBAL_ARGS="--emitcheckpoints --nodiscover --raft --rpc --rpcaddr 0.0.0.0 --rpcapi admin,db,eth,debug,miner,net,shh,txpool,personal,web3,quorum"

echo "[*] Starting Constellation nodes"
nohup constellation-node tm1.conf 2>> qdata/logs/constellation1.log &
sleep 1

for i in `seq 2 7`;
do
  nohup constellation-node tm$i.conf 2>> qdata/logs/constellation$i.log &
done

sleep 1

echo "[*] Starting node 1"
PRIVATE_CONFIG=tm1.conf nohup geth --verbosity 6 --datadir qdata/dd1 $GLOBAL_ARGS --raftport 50401 --rpcport 22001 --port 21001 --unlock 0 --password passwords.txt 2>>qdata/logs/1.log &

for i in `seq 2 7`;
do
  echo "[*] Starting node $i"
  PRIVATE_CONFIG=tm$i.conf nohup geth --datadir qdata/dd$i $GLOBAL_ARGS --raftport 5040$i --rpcport 2200$i --port 2100$i 2>>qdata/logs/$i.log &
done

echo "[*] Waiting for nodes to start"
sleep 5

echo "All nodes configured. See 'qdata/logs' for logs, and run e.g. 'geth attach qdata/dd1/geth.ipc' to attach to the first Geth node"
