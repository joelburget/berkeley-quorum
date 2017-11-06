pragma solidity ^0.4.18;

contract Account {
    uint public balance;

    event BalanceSet(uint data);

    function Account(uint balance_) public {
        balance = balance_;
    }

    function set(uint x) public {
        balance = x;
        BalanceSet(balance);
    }

    function adjust(int amount) public {
        if (amount < 0) {
            balance -= uint(amount); // is this sign right?
        } else {
            balance += uint(amount);
        }
        BalanceSet(balance);
    }

    function transferTo(address recipient_, uint amount) public {
        require(amount <= balance);
        balance -= amount;
        var recipient = Account(recipient_);
        recipient.adjust(int(amount));
    }

    function query() constant public returns (uint retVal) {
        return balance;
    }
}
