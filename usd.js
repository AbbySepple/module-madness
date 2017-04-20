var random = require('./random');

// this formatts to a dollar amount
// var number = random(10, 100);

function dollarZ(returns) {
  return '$' + returns.toLocaleString();
}

module.exports = dollarZ;
// console.log(dollarZ(random(10, 100)));
