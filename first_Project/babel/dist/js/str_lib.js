"use strict";

exports.hello = function () {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'user';
  return "hellow.".concat(name);
};