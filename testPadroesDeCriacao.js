const { test: abstractfactory } = require('./padroes-de-criacao/abstractfactory')
const { test: builder } = require('./padroes-de-criacao/builder')
const { test: factory } = require('./padroes-de-criacao/factory')
const { test: prototype } = require('./padroes-de-criacao/prototype')
const { test: singleton } = require('./padroes-de-criacao/singleton')

const testPadroesDeCriacao = async () => {
  console.log('\n\n\n','/** PADRÕES DE CRIAÇÃO **/','\n\n\n')
  
  console.log('Abstract Factory')
  await abstractfactory()
  console.log()

  console.log('Builder')
  await builder()
  console.log()

  console.log('Factory')
  await factory()
  console.log()

  console.log('Prototype')
  await prototype()
  console.log()

  console.log('Singleton')
  await singleton()
  console.log()
}

const test = exports.testPadroesDeCriacao = async () => {
  await testPadroesDeCriacao()
}

//(async = () => { test() })()