const assertEqual = require('./assertEqual');

function tail(assertEqual) {
  return assertEqual.slice(1);
  }


module.exports = tail;
