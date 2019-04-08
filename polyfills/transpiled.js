"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BetterArray = function () {
  function BetterArray(arr) {
    _classCallCheck(this, BetterArray);

    this.arr = arr;
  }

  _createClass(BetterArray, [{
    key: "has",
    value: function has(item) {
      return this.arr.includes(item);
    }
  }]);

  return BetterArray;
}();

var myArray = new BetterArray([1, 2, 3]);

console.log(myArray.has(2)); // true
console.log(myArray.has(4)); // false