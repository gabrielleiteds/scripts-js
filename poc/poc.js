const companyBuilderClass = require('./company-builder')
const somaClass = require('./classeteste')

const company = companyBuilderClass.aCompany().newValues({name: 'testes'}).build()
const pessoa1 = new somaClass(10, 10)
const pessoa1Imc = somaClass.imc(pessoa1)

console.log(company, soma)