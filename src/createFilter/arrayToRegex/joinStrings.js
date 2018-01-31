"use strict";

const reverse = require("../../utils/reverse");
const sort = array =>  Array.from(array).sort();

module.exports = value => `(${reverse(sort(value)).join("|")})`;
