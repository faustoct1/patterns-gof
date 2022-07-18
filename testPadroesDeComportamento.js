const { test: chainofresponsibility } = require('./padroes-de-comportamento/chainofresponsibility')
const { test: command } = require('./padroes-de-comportamento/command')
const { test: interpreter } = require('./padroes-de-comportamento/interpreter')
const { test: iterator } = require('./padroes-de-comportamento/iterator')
const { test: mediator } = require('./padroes-de-comportamento/mediator')
const { test: memento } = require('./padroes-de-comportamento/memento')
const { test: observer } = require('./padroes-de-comportamento/observer')
const { test: state } = require('./padroes-de-comportamento/state')
const { test: strategy } = require('./padroes-de-comportamento/strategy')
const { test: templatemethod } = require('./padroes-de-comportamento/templatemethod')
const { test: visitor } = require('./padroes-de-comportamento/visitor')

const testPadroesDeComportamento = async () => {
  console.log('\n\n\n','/** PADRÕES DE COMPORTAMENTO **/','\n\n\n')

  console.log('Chain of Responsability')
  await chainofresponsibility()
  console.log()

  console.log('Command')
  await command()
  console.log()

  console.log('Interpreter')
  await interpreter()
  console.log()

  console.log('Iterator')
  await iterator()
  console.log()

  console.log('Mediator')
  await mediator()
  console.log()

  console.log('Memento')
  await memento()
  console.log()

  console.log('Observer')
  await observer()
  console.log()

  console.log('State')
  await state()
  console.log()

  console.log('Strategy')
  await strategy()
  console.log()

  console.log('Template Method')
  await templatemethod()
  console.log()

  console.log('Visitor')
  await visitor()
  console.log()

}

const test = exports.testPadroesDeComportamento = async () => {
  await testPadroesDeComportamento()
}

//(async = () => { test() })()