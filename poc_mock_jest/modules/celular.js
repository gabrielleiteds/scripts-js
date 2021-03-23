const carregador = require('./carregador')

module.exports = {
  charge(power) {
    return carregador.sendEnergy(power)
  }
}