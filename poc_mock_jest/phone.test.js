const Phone = require('./modules/celular')

jest.mock('./modules/carregador.js', () => {
  return jest.fn().mockImplementation(() => {
    return {
      sendEnergy: jest.fn().mockReturnValue(70)
    }
  })
})

describe('Poc mock jest', () => {  
  it('Should return charge', async () => {
    const phone = new Phone()
    const response = await phone.charge()

    console.log(response)
    
    expect(response).not.toBeNull()
  })
})