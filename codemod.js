export default function(file, api) {
  const j = api.jscodeshift;
  return j(file.source)
    .find(j.VariableDeclaration)
    .replaceWith(
      p => j.variableDeclaration('const', p.value.declarations)
    )
    .toSource();
};

