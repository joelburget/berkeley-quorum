var gethAcct = eth.accounts[0]
web3.eth.defaultAccount = gethAcct;

var enoughGas = 3000000;

var checkingAccountAbi = [{"constant":false,"inputs":[{"name":"recipient_","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"queryBalance","outputs":[{"name":"retVal","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ticker","type":"address"}],"name":"addDividends","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"int256"}],"name":"adjust","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"balance_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"data","type":"uint256"}],"name":"BalanceSet","type":"event"}];

var checkingAccountBytecode = "0x6060604052341561000f57600080fd5b6040516020806103fa8339810160405280805190602001909190505080600081905550506103b8806100426000396000f300606060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632ccb1b301461007d57806336f40c61146100bf578063604661d9146100e857806360fe47b114610121578063b69ef8a814610144578063e2a4d7dd1461016d575b600080fd5b341561008857600080fd5b6100bd600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610190565b005b34156100ca57600080fd5b6100d261023b565b6040518082815260200191505060405180910390f35b34156100f357600080fd5b61011f600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610244565b005b341561012c57600080fd5b61014260048080359060200190919050506102da565b005b341561014f57600080fd5b61015761031d565b6040518082815260200191505060405180910390f35b341561017857600080fd5b61018e6004808035906020019091905050610323565b005b6000805482111515156101a257600080fd5b8160008082825403925050819055508290508073ffffffffffffffffffffffffffffffffffffffff1663e2a4d7dd836040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b151561022257600080fd5b6102c65a03f1151561023357600080fd5b505050505050565b60008054905090565b6102d78173ffffffffffffffffffffffffffffffffffffffff16635eb4b53a6000604051602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15156102b357600080fd5b6102c65a03f115156102c457600080fd5b50505060405180519050600054016102da565b50565b806000819055507fb7d09e3923efbf6076b5636dd4a61388264e57a5f3161976dbc8a92615f6b9d76000546040518082815260200191505060405180910390a150565b60005481565b600081121561034057806000808282540392505081905550610350565b8060008082825401925050819055505b7fb7d09e3923efbf6076b5636dd4a61388264e57a5f3161976dbc8a92615f6b9d76000546040518082815260200191505060405180910390a1505600a165627a7a72305820261e0e31a38f2d8afb3457eae6806e0266ab8e1ae3d1229ca2680f2df30a315e0029";

var checkingAccountContract = web3.eth.contract(checkingAccountAbi);

var tickerAbi = [{"constant":true,"inputs":[],"name":"value","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"calculateDividends","outputs":[{"name":"dividendValue","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getPrice","outputs":[{"name":"currentValue","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"value_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];

var tickerBytecode = "0x6060604052341561000f57600080fd5b604051602080610199833981016040528080519060200190919050508060008190555050610157806100426000396000f300606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633fa4f245146100675780635eb4b53a1461009057806360fe47b1146100b957806398d5fdca146100dc575b600080fd5b341561007257600080fd5b61007a610105565b6040518082815260200191505060405180910390f35b341561009b57600080fd5b6100a361010b565b6040518082815260200191505060405180910390f35b34156100c457600080fd5b6100da6004808035906020019091905050610118565b005b34156100e757600080fd5b6100ef610122565b6040518082815260200191505060405180910390f35b60005481565b6000600260005402905090565b8060008190555050565b600080549050905600a165627a7a7230582088d25228f63cab1e41e21d99a8a702857827bfb119deb1365b6f472d2fddfe2d0029";

var tickerContract = web3.eth.contract(tickerAbi);

var key7 = "ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc=";

function createCb(acctName) {
  return function(e, contract) {
    if (e) {
      console.log("err creating " + acctName, e);
    } else {
      if (!contract.address) {
        console.log(acctName + " transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
      } else {
        console.log(acctName + " mined! Address: " + contract.address);
      }
    }
  }
}
