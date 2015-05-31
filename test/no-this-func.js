"use strict";

var linter = require("eslint").linter,
    ESLintTester = require("eslint-tester");

var eslintTester = new ESLintTester(linter);

eslintTester.addRuleTest("lib/rules/no-this-func", {
    valid: [
        "var MyClass = function() {}; MyClass.prototype.sayHello = function() { console.log(\"hello\"); };",
        "var MyClass = function() { var sayHello = function() { console.log(\"hello\"); }; };"
    ],
    invalid: [{
            code: "var MyClass = function() { this.sayHello = function() { console.log(\"hello\"); }; };",
            errors: [{
                message: "Method 'sayHello' should be declared on the prototype."
            }]
        }
    ]
});
