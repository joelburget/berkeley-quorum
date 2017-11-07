var gethAcct = eth.accounts[0]
web3.eth.defaultAccount = gethAcct;

var checkingAccountAbi = [{"constant":true,"inputs":[],"name":"query","outputs":[{"name":"retVal","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"recipient_","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"int256"}],"name":"adjust","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"balance_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"data","type":"uint256"}],"name":"BalanceSet","type":"event"}];

var checkingAccountBytecode = "0x6060604052341561000f57600080fd5b6040516020806103208339810160405280805190602001909190505080600081905550506102de806100426000396000f30060606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632c46b205146100725780632ccb1b301461009b57806360fe47b1146100dd578063b69ef8a814610100578063e2a4d7dd14610129575b600080fd5b341561007d57600080fd5b61008561014c565b6040518082815260200191505060405180910390f35b34156100a657600080fd5b6100db600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610155565b005b34156100e857600080fd5b6100fe6004808035906020019091905050610200565b005b341561010b57600080fd5b610113610243565b6040518082815260200191505060405180910390f35b341561013457600080fd5b61014a6004808035906020019091905050610249565b005b60008054905090565b60008054821115151561016757600080fd5b8160008082825403925050819055508290508073ffffffffffffffffffffffffffffffffffffffff1663e2a4d7dd836040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b15156101e757600080fd5b6102c65a03f115156101f857600080fd5b505050505050565b806000819055507fb7d09e3923efbf6076b5636dd4a61388264e57a5f3161976dbc8a92615f6b9d76000546040518082815260200191505060405180910390a150565b60005481565b600081121561026657806000808282540392505081905550610276565b8060008082825401925050819055505b7fb7d09e3923efbf6076b5636dd4a61388264e57a5f3161976dbc8a92615f6b9d76000546040518082815260200191505060405180910390a1505600a165627a7a72305820d99d36cf34e9f3508e4713309eaeb0d91a1766da663f35caad2dad052186d4b30029";

var checkingAccountContract = web3.eth.contract(checkingAccountAbi);

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
