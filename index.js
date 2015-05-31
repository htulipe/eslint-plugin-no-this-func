"use strict";

module.exports = {
	rules: {
		"no-this-func": require("./lib/rules/no-this-func.js")
	},
	rulesConfig: {
		"no-this-func": 2
	}
};