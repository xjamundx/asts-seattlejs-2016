module.exports = function(context) {
  return {
    "VariableDeclaration": function(node) {
       if (node.kind === "var") {
         context.report(node, "You're var-y bad!");
       }
    }
  }
}
