"use strict";

function isParentFunction(node) {
    return node.parent.type === "BlockStatement"
        && node.parent.parent.type === "FunctionExpression";
}

module.exports = function(context) {

    function report(node) {
        context.report(node, "Method '{{name}}' should be declared on the prototype.", { name: node.left.property.name });
    }

    return {
        "AssignmentExpression": function(node) {
            if (!isParentFunction(node.parent)) {
                return;
            }
            if (node.left.type === "MemberExpression" &&
                node.left.object.type === "ThisExpression" &&
                node.right.type === "FunctionExpression") {
                report(node);
            }
        }
    };
};