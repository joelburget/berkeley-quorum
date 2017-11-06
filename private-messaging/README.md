# Workshop: messaging app

This is an open-ended problem, to be done after running the demos (in the `demo` folder) to gain familiarity with Quorum.

We will create a messaging app which supports private messaging. Think Slack or IRC, but blockchain-based. We'll start with the concept of a `Channel`, where messages can be sent.

1. Create a `Channel` contract which other mailboxes can send messages to. This should have a means of receiving `string` messages.

2. Build (in JavaScript):

* A means of subscription to channels. Anytime an event is fired in a subscribed channel you should get a printed notification. This will look something like `var subscriptionHandle = subscribe("0x1349f3e1b8d71effb47b840594ff27da7e603d17")`. Hint: use `eth.filter`.

* You should also be able to unsubscribe.

* You should be able to create a public channel by deploying a public contract or a private channel by creating a private contract where the members are party to the contract.

## Bonus points

* Build a directory (contract) of users so you don't have to use Ethereum addresses. Usernames are much nicer.
* Allow channels to receive more interesting data than just strings. Arrays, numbers, etc.
* Create a web frontend.
* Use Quorum's ZSL integration to build a payment feature into chat.
