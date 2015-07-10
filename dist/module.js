(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Deck = (function () {
    function Deck() {
        _classCallCheck(this, Deck);

        this.name = 'Son nom';
    }

    Deck.prototype.getName = function getName() {
        return this.name;
    };

    return Deck;
})();

exports.Deck = Deck;

},{}],2:[function(require,module,exports){
'use strict';

var _import = require('./import');

// 25
console.log(_import.square(5));

var cred = {
  name: 'Ritesh Thomas',
  enrollmentNo: 11115078
};

var x = new _import.MyClass(cred);

//Ritesh Kumar
console.log(x.getName());

},{"./import":1}]},{},[2]);
