let test = [
  {
    name: 'Luiza',
    email: 'lu.saquette@gmail.com'
  },
  {
    name: 'Luiza',
    email: 'lu.saquette@gmail.com',
    age: 1
  },
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


function removeDuplicatedObjects(sourceArrray) {
  let values = sourceArrray.filter(function (position) {
    return !this[JSON.stringify(position)] && (this[JSON.stringify(position)] = true);
  }, Object.create(null))

  return values;
}

function removeDuplicatedObjectsForProps(sourceArray, props) {
  const uniqueArray = []

  sourceArray.forEach(item => {
    let propsToCheck = props || Object.keys(item)
    const index = uniqueArray.findIndex(uniqueItem => {
      if (Object.keys(item).length != Object.keys(uniqueItem).length) {
        return false;
      }
        for (const prop of propsToCheck) {

          if (uniqueItem[prop] !== item[prop]) return false
        }
      return true
    })
    if (index === -1) uniqueArray.push(item)
  })
  return uniqueArray
}

console.log(removeDuplicatedObjectsForProps(test, ['name']))
console.log(removeDuplicatedObjectsForProps(test))

module.exports = {
  removeDuplicatedObjects,
  removeDuplicatedObjectsForProps
};