
// 1-The first function should call Module 2, passing the result of Module 1 as an argument.
// 2-The second function should return the text “Account balance: \n”.



var random = require('./random');
var usd = require('./usd');
//pt.1


//pt.2
var accountBalance = {
  sendMessage: function() {
// format the movie data
    return "Account Balance: " + '\n';
  },
  sendNumber: function(min, max) {
    return usd(random(min, max));
  }
};

module.exports = accountBalance;
