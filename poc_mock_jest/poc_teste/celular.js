const Charger = require('./carregador')

const charger = new Charger()

class Phone {
  charge(power) {
    return charger.sendEnergy(power)
  }
}

module.exports = Phone