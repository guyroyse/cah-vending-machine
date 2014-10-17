var VendingMachine = {

  create: function() {

    var self = {};

    var coins = {
      nickel: '$0.05',
      dime: '$0.10',
      quarter: '$0.25'
    };

    var _display = "INSERT COIN";

    self.display = function() {
      return _display;
    };

    self.coinReturn = function() {
      return ['stone'];
    };

    self.insertCoin = function(coin) {
      var foundCoin = coins[coin];
      _display = foundCoin ? foundCoin : "INVALID COIN";
    };

    return self;

  }

};
