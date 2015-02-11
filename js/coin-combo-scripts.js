var coinCombo = function(amount) {
  var coinCount = [0,0,0,0]
  while (amount >= 25) {
    coinCount[0]++;
    amount -= 25;
  }
  while (amount >= 10) {
    coinCount[1]++;
    amount -= 10;
  }
  while (amount >= 5) {
    coinCount[2]++;
    amount -= 5;
  }
  coinCount[3] = amount;
  return coinCount;
};
