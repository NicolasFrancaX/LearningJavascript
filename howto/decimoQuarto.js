function Account(description, balance) {
  this.description = description;
  this.balance = balance;
}

Account.prototype.withdraw = function(amount) {
  if (amount <= this.balance) this.balance -= amount;
  else console.log("Saldo não disponível.");
};

Account.prototype.deposit = function(amount) {
  this.balance += amount;
};

Account.prototype.transfer = function(amount, account) {
  account.deposit(amount);
  this.withdraw(amount);
};
