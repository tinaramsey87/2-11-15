describe('romanNumeral', function() {
  it("returns I for 1", function() {
    expect(romanNumeral(1)).to.equal("I")
  });

  it("concatinates multiple instances of the same digit when necessary", function() {
    expect(romanNumeral(2)).to.equal("II")
  });

  it("uses more symbols than just I when necessary", function() {
    expect(romanNumeral(5)).to.equal("V")
  });

  it("concatinates multiple symbols when necessary", function() {
    expect(romanNumeral(6)).to.equal("VI")
  });
});
