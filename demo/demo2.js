// Create two private accounts visible to node 1 and node 7, then do a private
// transaction reprensenting a transfer from 1 to 7.

var account1 = null;
var account7 = null;

var opts = {
  from: gethAcct,
  data: checkingAccountBytecode,
  gas: 300000,
  privateFor: [key7],
};

function createAccounts() {
  account1 = checkingAccountContract.new(1000, opts, createCb("account 1"));
  account7 = checkingAccountContract.new(2000, opts, createCb("account 7"));
}

function doTransfer() {
  account1.transferTo.sendTransaction(
    account7.address, // recipient
    500, // amount
    {
      from: gethAcct,
      gas: 300000,
      privateFor: [key7],
    },
    function(e, addr) {
      if (e) {
        console.log("err sending transfer", e);
      } else {
        console.log("transfer transaction send: TransactionHash: " + addr);
      }
    }
  );
}

function showBalances() {
  console.log("account 1", account1.query());
  console.log("account 7", account7.query());
}
