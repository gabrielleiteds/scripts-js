class Charger {
  constructor(power) {
    this.power = power
  }

  async sendEnergy() {
    return this.power
  }
}

module.exports = Charger