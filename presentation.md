theme: Plain Jane, 4

# Quorum

---

# Motivation

* Use Cases
* Ethereum as a starting point

---

# Motivation: Use Cases

* Interbank Information Network
* Credit Default Swap

---

# Motivation: Ethereum as a starting point

| Distributed Database | Public blockchain |
| --- | --- |
| closed, single operator | open, multiple operators |
| trust among nodes | trustless, censorship resistant |
| fast, capable of strong consistency | slow, eventual consistency |
| store of mutable state | log of state transitions |

---

# Motivation: Ethereum as a starting point

| Distributed Database | ... | Public blockchain |
| --- | --- | --- |
| closed, single operator | multiple known operators | open, multiple operators |
| trust among nodes | accountability | trustless, censorship resistant |
| fast, capable of strong consistency | strong, not eventual consistency | slow, eventual consistency |
| store of mutable state | log of state transitions | log of state transitions |

---

# Motivation: Ethereum as a starting point

Also:

* confidential transactions
* real-world governance (tech _and_ law)
* enterprise deployment + support

---

# Consensus

---

^ possible questions on proof of stake

# Consensus: Proof of work

* everyone is anonymous
* mutual lack of trust
* mining power as proxy for:
  * investment in the network
  * how much of the vote you get

---

# Consensus: Enterprise

* everyone is ~~anonymous~~ known
* mutual ~~lack of~~ trust
* mining is not necessary

---

# Consensus: [Raft](https://raft.github.io/)

> "Raft is a consensus algorithm that is designed to be easy to understand. It's equivalent to Paxos in fault-tolerance and performance."

---

# Consensus: Raft

* Formally verified protocol
* We use the etcd implementation, which is written in Go and not verified, but mature

---

^ Raft has a trusted leader and is vulnerable to censorship. we could add an "elect new leader" message, but this is a kludge.

# Consensus: Raft strengths, weaknesses, and limitations

* Censorship
* Cluster size
* Throughput / latency

---

^ Clusters of 3 and 5 are typical in traditional raft deployments

^ TODO: add max size

# Consensus: Cluster size

| Servers | Quorum Size | Failure Tolerance |
|---|---|---|
| 1 | 1 | 0 |
| 2 | 2 | 0 |
| 3 | 2 | 1 * |
| 4 | 3 | 1 |
| 5 | 3 | 2 * |
| ... | ... | ... |

---

# Consensus: Throughput / Latency

* Up to 1100 tx / s (ideal conditions)
* 0 - 50 ms latency

---

^ TODO: include link somewhere: https://github.com/jpmorganchase/quorum/blob/master/raft/doc.md

^ TODO: diagram of transaction messaging / difference between txes and blocks / speculative chain

^ TODO: more details

# Consensus: Ethereum and Raft

| Ethereum | Raft |
| --- | --- |
| minter | leader |
| verifier | follower |

---

# Consensus: Ethereum and Raft

## "Speculative minting"

* Mint every 50ms
* Raft can take arbitrarily long to confirm blocks

---

# Consensus: Istanbul BFT / PBFT

TODO: what is it

---

# Consensus: Istanbul BFT / PBFT

## _Demo_

---

# Consensus: New work

* The Honey Badger of BFT Protocols - Miller, Xia, Croman, Shi, Song
* Thunderella: Blockchains with Optimistic Instant Confirmation - Pass, Shi

---

# Simple privacy

---

# Simple privacy: types of private state in Quorum

---

# Simple privacy: Constellation

## Ethereum network

![inline](photos/ethereum-network.png)

---

# Simple privacy: Constellation

## Quorum network

Peer-to-peer encrypted message exchange

![inline](photos/quorum-network.png)

---

# Simple privacy: consensus with private state

![inline](photos/private1.png)

---

# Simple privacy: consensus with private state

![inline](photos/private2.png)

---

# Simple privacy: consensus with private state

![inline](photos/private3.png)

---

# Simple privacy: consensus with private state

![inline](photos/private4.png)

---

# Simple privacy: Creating a private contract

```javascript
var simple = simpleContract.new(42, {
  from:web3.eth.accounts[0],
  data: bytecode,
  gas: 300000,
});
```

---

# Simple privacy: Creating a private contract

```javascript
var simple = simpleContract.new(42, {
  from:web3.eth.accounts[0],
  data: bytecode,
  gas: 300000,

  privateFor: ["ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="]
  //            <-             public key                 ->
});
```

---

# Simple privacy: Private -> Private

TODO: private contracts can call other private contracts

---

# Simple privacy: Private -> Public

TODO: private contracts can call public contracts, but...

---

# Demo: Private -> Public -> Private call

---

# ZSL

* What is zero-knowledge proof?
* Non-interactive zero-knowledge proof
* zk-SNARKs
* ZSL
* Applications
* Demo

---

# ZSL: What is zero-knowledge proof?

---

# ZSL: Non-interactive zero-knowledge proof

> a variant of zero-knowledge proofs in which no interaction is necessary between prover and verifier

Intuition?
