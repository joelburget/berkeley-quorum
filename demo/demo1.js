var account = null;

function createAccount() {
  account = accountContract.new(
    42,
    {
      from: gethAcct,
      data: accountBytecode,
      gas: 300000,
      privateFor: [key7]
    },
    createCb("contract")
  );
}
