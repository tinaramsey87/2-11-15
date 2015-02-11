describe("coinCombo", function() {
  it("returns four quarters for one hundred cents", function() {
    expect(coinCombo(100)).to.eql([4,0,0,0])
  });

  it("returns two quarters and two dimes for seventy cents", function() {
    expect(coinCombo(70)).to.eql([2,2,0,0])
  });

  it("returns one dime and one nickel for fifteen cents", function() {
    expect(coinCombo(15)).to.eql([0,1,1,0])
  });

  it("returns one dime and three pennies for thirteen cents", function() {
    expect(coinCombo(13)).to.eql([0,1,0,3])
  });
});
