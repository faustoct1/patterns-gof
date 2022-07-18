const { test: adapter } = require('./padroes-de-estrutura/adapter')
const { test: bridge } = require('./padroes-de-estrutura/bridge')
const { test: composite } = require('./padroes-de-estrutura/composite')
const { test: decorator } = require('./padroes-de-estrutura/decorator')
const { test: delegate } = require('./padroes-de-estrutura/delegate')
const { test: facade } = require('./padroes-de-estrutura/facade')
const { test: flyweight } = require('./padroes-de-estrutura/flyweight')
const { test: proxy } = require('./padroes-de-estrutura/proxy')

const testPadroesDeCriacao = async () => {
  console.log('\n\n\n','/** PADRÕES DE ESTRUTURA **/','\n\n\n')

  console.log('Adapter')
  await adapter()
  console.log()

  console.log('Bridge')
  await bridge()
  console.log()

  console.log('Composite')
  await composite()
  console.log()

  console.log('Decorator')
  await decorator()
  console.log()

  console.log('Delegate')
  await delegate()
  console.log()

  console.log('Facade')
  await facade()
  console.log()

  console.log('Facade')
  await facade()
  console.log()

  console.log('Flyweight')
  await flyweight()
  console.log()

  console.log('Proxy')
  await proxy()
  console.log()
}

const test = exports.testPadroesDeEstrutura = async () => {
  await testPadroesDeCriacao()
}

//(async = () => { test() })()