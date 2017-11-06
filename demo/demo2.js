// Create two private accounts visible to node 1 and node 7, then do a private
// transaction reprensenting a transfer from 1 to 2.

var account1 = null;
var account2 = null;

function createAccounts() {
  var opts = {
    from: gethAcct,
    data: accountBytecode,
    gas: 300000,
    privateFor: [key7],
  };

  account1 = accountContract.new(1000, opts, createCb("account 1"));
  account2 = accountContract.new(2000, opts, createCb("account 2"));
}

function doTransfer() {
  account1.transferTo.sendTransaction(
    account2.address, // recipient
    500, // amount
    {
      from: gethAcct,
      to: account1.address,
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
