const Charger = require('./carregador')

const charger = new Charger(5)

class Phone {
  async charge() {
    return charger.sendEnergy()
  }
}

module.exports = Phone