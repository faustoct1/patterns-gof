class HelloWorld {
  str = 'Hello World'.split('')
  iterador = () => {
    class Iterador{
      obj = []
      index = 0
      constructor(obj){
        this.obj = obj
      }
      temProximo = () => this.index<this.obj.length
      proximo = () => this.obj[this.index++]
    }
    return new Iterador(this.str)
  }
}

const test = exports.test = async () => {
  const iterador = (new HelloWorld()).iterador()
  str = ''
  while(iterador.temProximo()){
    str += iterador.proximo()
  }
  console.log(str)
}

//(async ()=>{ test() })()
