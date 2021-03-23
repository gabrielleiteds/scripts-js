const Celular = require('./modules/celular')

jest.mock('./modules/carregador.js', () => {
  return jest.fn().mockImplementation(() => {
    return {
      sendEnergy: jest.fn().mockReturnValue(true)
    }
  })
})

describe('Poc mock jest', () => {  
  it('Should return charge', async () => {
    const celular = new Celular()
    const response = await celular.charge()
    
    expect(response).not.toBeNull()
  })
})