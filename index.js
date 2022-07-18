const { testPadroesDeCriacao } = require('./testPadroesDeCriacao')
const { testPadroesDeEstrutura } = require('./testPadroesDeEstrutura')
const { testPadroesDeComportamento } = require('./testPadroesDeComportamento')

const test = async () => {
  await testPadroesDeCriacao()
  await testPadroesDeEstrutura()
  await testPadroesDeComportamento()
}

(async = () => {
  test()
})()