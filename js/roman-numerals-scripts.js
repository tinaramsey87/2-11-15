var romanNumeral = function(arabic) {
  var stringOutput = "";
  var outputMatrix = [0,0,0,0,0,0,0];
  var numeralNames = ["M","D","C","L","X","V","I"];
  var numeralValues = [1000, 500, 100, 50, 10, 5, 1];

  numeralValues.forEach(function(value) {
    var index = numeralValues.indexOf(value);
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

  return stringOutput;
}
