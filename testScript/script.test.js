const { removeDuplicatedObjects, stringToArray, removeDuplicatedObjectsForProps } = require('./script');

const array = [
  { name: 'Luiza', email: 'lu.saquette@gmail.com' },
  { name: 'Luiza', email: 'lu.saquette@gmail.com' },
  { name: 'Luiza', email: 'lu.saquette2@gmail.com' },
  { name: 'Gabriel', email: 'gabriel@gmail.com'}
]

const expectResult = [
  {
    name: 'Luiza',
    email: 'lu.saquette@gmail.com'
  },
  {
    name: 'Gabriel',
    email: 'gabriel@gmail.com'
  }
]

const expectResult2 = [
  {
    name: 'Luiza',
    email: 'lu.saquette@gmail.com'
  },
  {
    name: 'Luiza',
    email: 'lu.saquette2@gmail.com'
  },
  {
    name: 'Gabriel',
    email: 'gabriel@gmail.com'
  }
]

let stringObject = '{"result":true, "count":42}, {"result":true, "count":42}';

let arrayOfObject = [
  { result: true, count: 42 },
  { result: true, count: 42 }
]

describe('function of remove double objects', () => {
  it('Should remove duplicated objects', () => {
    const uniqueObjectsArray = removeDuplicatedObjectsForProps(array, ['name'])

    expect(uniqueObjectsArray).toEqual(expectResult)
  })

  it('Should return array without duplicate objects and not pass props', () => {
    expect(removeDuplicatedObjectsForProps(array, null)).toEqual(expectResult2)
  })
})