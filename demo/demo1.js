// Create a private contract representing an account. This is visible to the
// sender (node 1) and node 7.

var account = null;

function createAccount() {
  account = checkingAccountContract.new(
    42,
    {
      from: gethAcct,
      data: checkingAccountBytecode,
      gas: 300000,
      privateFor: [key7]
    },
    createCb("contract")
  );
}
