describe("Vending Machine", function() {

  var machine;

  beforeEach(function() {
      machine = VendingMachine.create();
  });

  it("displays INSERT COIN when created", function() {
    expect(machine.display()).toBe("INSERT COIN");
  });

  it("displays $0.05 when a nickel is inserted", function() {
    machine.insertCoin("nickel");
    expect(machine.display()).toBe("$0.05");
  });

  it("displays $0.10 when a dime is inserted", function() {
    machine.insertCoin("dime");
    expect(machine.display()).toBe("$0.10");
  });

  it("displays $0.25 when a quarter is inserted", function() {
    machine.insertCoin("quarter");
    expect(machine.display()).toBe("$0.25");
  });

  when("a stone is inserted", function() {

    beforeEach(function() {
      machine.insertCoin("stone");
    });

    it("displays INVALID COIN", function() {
      expect(machine.display()).toBe("INVALID COIN");
    });

    it("puts the stone in the coin return", function() {
      expect(machine.coinReturn()).toEqual(['stone']);
    });

  });

});
