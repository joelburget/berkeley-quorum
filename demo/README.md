# Quorum demo

## Installing Quorum

First install [Quorum](https://github.com/jpmorganchase/quorum#quickstart). I recommend following the [quickstart](https://github.com/jpmorganchase/quorum-examples), which creates a dev environment inside VirtualBox / Vagrant.

It's also possible to install directly on your host OS without a VM.

1. Install the `geth` (Quorum) binary.

```
> git clone git@github.com:jpmorganchase/quorum.git
> cd quorum
> make
```

2. Install [constellation](https://github.com/jpmorganchase/constellation).

If you're on Mac and see an error about linking libsodium, try 1.0.11, which is old.

With those two binaries (`geth` and `constellation-node`) in your path, you can get started.

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
