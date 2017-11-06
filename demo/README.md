# Quorum demo

## Installing Quorum

First install [Quorum](https://github.com/jpmorganchase/quorum#quickstart). The quickstart recommends using VirtualBox and Vagrant, but if you're familiar with go you can install Quorum directly in your host OS without a VM.

```
> git clone git@github.com:jpmorganchase/quorum.git $GOPATH/src/github.com/ethereum/go-ethereum
> cd $GOPATH/src/github.com/ethereum/go-ethereum
> go get ./cmd/geth
> # or, if that doesn't work:
> make
```

## Running the demo

Start the cluster and attach to a Quorum node.

```
> ./init.sh
[*] Cleaning up temporary data directories
[*] Configuring node 1
...
> ./start.sh
[*] Starting Constellation nodes
[*] Starting node 1
[*] Starting node 2
[*] Starting node 3
[*] Starting node 4
[*] Starting node 5
[*] Starting node 6
[*] Starting node 7
[*] Waiting for nodes to start
All nodes configured. See 'qdata/logs' for logs, and run e.g. 'geth attach qdata/dd1/geth.ipc' to attach to the first Geth node

> geth attach qdata/dd1/geth.ipc
```

It should say "Welcome to the Geth JavaScript console!". Load the prelude (I've included some reused definitions in here) before following the instructions for `demo1.js`, `demo2.js`, and `demo3.js`.

```
> loadScript('prelude.js')
true
> loadScript('demo1.js')
true
> createAccount()
contract transaction send: TransactionHash: 0xc6e8d88ef01bcff05e0133631e963512566e6d17343acc0d928f35504964cc13 waiting to be mined...
undefined
> contract mined! Address: 0x1349f3e1b8d71effb47b840594ff27da7e603d17

> account.query()
42
```
