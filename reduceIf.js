var meuCarro = {
  marca: 'ford',
  ano: 1999,
  state: 'a'
}

const objTest = Object.values(meuCarro)

function verifIntegrate() {
  var arr = []

  for (var i = 0; i < arguments.length; i++) {
    if(arguments[i] == null || arguments[i] == "") {
      return 'todos os campos precisam ser preenchidos'
    } else {
      arr [i] = arguments[i]
    }
  }
  return arr
}

const a = verifIntegrate.apply(null, objTest)

console.log(meuCarro)