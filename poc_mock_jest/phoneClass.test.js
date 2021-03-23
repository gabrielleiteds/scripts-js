jest.mock('./poc_teste/carregador.js')

const Phone = require('./poc_teste/celular')

const Carregador = require('./poc_teste/carregador')

beforeEach(() => {
  Carregador.mockClear();
})
beforeAll(() => {

})

describe('Poc mock jest', () => {
  it('Should return charge 100', async () => {
    Carregador.sendEnergy = jest.fn()

    const phone = new Phone()

    const response = await phone.charge(25)

    expect(Carregador).toHaveBeenCalledTimes(1);
  })

  // it('Should return charge 0', async () => {
  //   const phone = new Phone()
  //   const response = await phone.charge()

  //   console.log(response)

  //   expect(response).toBe(0)
  // })

  // it('Should return 5 if not mocked', async () => {
  //   const phone = new Phone()
  //   const response = await phone.charge()

  //   console.log(response)

  //   expect(response).toBe(70)
  // })
})