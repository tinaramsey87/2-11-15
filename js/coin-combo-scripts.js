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

$(document).ready(function() {
  $("form#amount").submit(function(event){
    var amount = parseInt($("input#amount").val());
    var coinCount = coinCombo(amount)

    $(".amount").text(amount);
    $("#result").show();
    $("#coin-result").empty();
    $("#coin-result").show();


    for (i = coinCount[0]; i > 0; i--) {
      $("#coin-result").append("<img id='quarter' src='css/img/quarter.png'>");
    }

    for (i = coinCount[1]; i > 0; i--) {
      $("#coin-result").append("<img id='dime' src='css/img/dime.png'>");
    }

    for (i = coinCount[2]; i > 0; i--) {
      $("#coin-result").append("<img id='nickel' src='css/img/nickel.png'>");
    }

    for (i = coinCount[3]; i > 0; i--) {
      $("#coin-result").append("<img id='penny' src='css/img/penny.png'>");
    }

    event.preventDefault();
  });
});
