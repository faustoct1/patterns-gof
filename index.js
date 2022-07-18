const { default: abstractfactory } = require('./padroes-de-criacao/abstractfactory')
const { default: builder } = require('./padroes-de-criacao/builder')
const { default: factory } = require('./padroes-de-criacao/factory')

const test = async () => {
  console.log(await abstractfactory())
}

(async = () => {
  test()
})()