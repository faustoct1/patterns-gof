class Observador {
  str = ''
  observa = (letra,i) => {
    this.str += letra
  }
  getStr = () => this.str
}

class HelloWorld {
  observadores = []
  str = 'Hello World'
  executar = () => {
    for(let i=0;i<this.str.length;i++){
      this.observadores.forEach(o=>{
        o.observa(this.str[i],i)
      })
    }
  }
  addObservador = (o) => {
    this.observadores.push(o)
  }
  removeObservador = (o) => {
    const index = this.observadores.indexOf(o)
    this.observadores.splice(index,1)
  }
}

const test = async () => {
  const hw = new HelloWorld()
  const o = new Observador()
  hw.addObservador(o)
  hw.executar()
  console.log(o.getStr())
}

(async ()=>{ test() })()
