// Create a public stock ticker contract and a private account contract. The
// private contract calls the public contract successfullly since it only
// reads.

var ticker = null;
var privAcct = null;

function createAccounts() {
  var tickerOpts = {
    from: gethAcct,
    data: tickerBytecode,
    gas: enoughGas,
  };

  var acctOpts = {
    from: gethAcct,
    data: checkingAccountBytecode,
    gas: enoughGas,
    privateFor: [key7],
  };

  ticker   = tickerContract.new(423, tickerOpts, createCb("stock ticker"));
  privAcct = checkingAccountContract.new(2000, acctOpts, createCb("private account"));
}

function issueDividends() {
  privAcct.addDividends.sendTransaction(
    ticker.address, // recipient
    {
      from: gethAcct,
      gas: enoughGas * 100,
      privateFor: [key7],
    },
    function(e, addr) {
      if (e) {
        console.log("err issuing dividends", e);
      } else {
        console.log("dividend issuance transaction send: TransactionHash: " + addr);
      }
    }
  );
}

function showBalances() {
  console.log("ticker:", ticker.getPrice());
  console.log("private account 7:", privAcct.queryBalance());
}
