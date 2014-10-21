"use strict";
var Promise = require('es6-promise').Promise;

function Policy(opts) {
  var options = opts || {};
  this._apply = options.apply || function(payment) {
    return new Promise(function(resolve, reject) { resolve() });
  };
  this._doesApply = options.doesApply || function(payment) {
    return new Promise(function(resolve, reject) {
      resolve(false);
    });
  },
  this._name = options.name;
  this._type = options.type;
}

Policy.prototype = {
  getName: function getName() {
    return this._name;
  },
  setName: function setName(name) {
    this._name = name;
    return this;
  },
  getType: function getType() {
    return this.type;
  },
  setType: function setType(type) {
    this.type = type;
    return this;
  },
  apply: function apply(payment) {
    return this._apply(payment);
  },
  doesApply: function doesApply(payment) {
    return this._doesApply(payment); 
  }
};

module.exports = Policy;
