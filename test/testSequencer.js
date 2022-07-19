const TestSequencer = require('@jest/test-sequencer').default;

class CustomSequencer extends TestSequencer {

  sort (tests) {

    const order = [
      'levelUp',
      'copyPaste',
      'cleanUp',
      'bigWords',
      'targetPractice',
      'rotate',
      'unduplicate',
      'arraySameOrdered',
      'arraySameUnordered',
      'stepCount'
    ].map(x => `${x}.test.js`)

    console.log('\nGood luck amigo!')
    
    console.log(order.map((x,i) => `${i+1}. ${x.split('.')[0]}`))

    return tests
      .map(A => ({ ...A, fileName: A.path.split('/').at(-1) }))
      .filter(A => order.includes(A.fileName))
      .sort((A, B) => {
        const i = order.indexOf(A.fileName)
        const j = order.indexOf(B.fileName)
        return i > j ? 1 : i < j ? -1 : 0
      })

  }
}

module.exports = CustomSequencer
