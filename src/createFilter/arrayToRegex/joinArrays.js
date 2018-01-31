"use strict";

const reverse = require("../../utils/reverse");

module.exports = value => `(${reverse(value).join("|")})`;
