module.exports = function(babel) {
  return {
    visitor: {
      VariableDeclaration: function(path) {
        if (path.node.kind === 'const') {
           path.node.kind = 'var';
        }
      }
    }
  };
}

