var romanNumeral = function(arabic) {
  var stringOutput = "";
  var outputMatrix = [0,0,0,0,0,0,0];
  var numeralNames = ["M","D","C","L","X","V","I"];
  var numeralValues = [1000, 500, 100, 50, 10, 5, 1];
  numeralValues.forEach(function(value, index) {
    while (arabic >= value) {
      outputMatrix[index]++;
      arabic -= value;
    }
  });
  outputMatrix.forEach(function(counter, index) {
    var name = numeralNames[index];
    while (counter > 0) {
      stringOutput = stringOutput.concat(name);
      counter--;
    }
  });
  stringOutput = stringOutput.replace("DCCCC", "CM");
  stringOutput = stringOutput.replace("CCCC", "CD");
  stringOutput = stringOutput.replace("LXXXX", "XC");
  stringOutput = stringOutput.replace("XXXX", "XL");
  stringOutput = stringOutput.replace("VIIII", "IX");
  stringOutput = stringOutput.replace("IIII", "IV");
  return stringOutput;
}

$(document).ready(function() {
  $("form#number").submit(function(event){
    var number = parseInt($("input#number").val());
    var roman = romanNumeral(number)

    $(".roman").text(roman);

    $("#result").show();

    event.preventDefault();
  });
});
