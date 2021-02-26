var fields = ["gabriel", "d", "leitedasilvag@gmail.com", 4, true];
var result = {};

function validateForm() {
  for (var i = 0; i < arguments.length; i++) {
    if (!arguments[i]) {
      return "argumento invalido"
    }
  }
  result.nome = fields[0]
  result.sobrenome = fields[1]
  result.numero = fields[2]
  result.email = fields[3]
  result.ativo = fields[4]

  return result;
}

console.log (validateForm.apply(null, fields))
