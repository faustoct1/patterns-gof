class Estrategia {
  getStr = () => {
    throw "Precisa de implementação"
  }
}

class HelloWorld extends Estrategia {  
  getStr = () => "Hello World"
}

class HelloWorldMaiusculo extends Estrategia {  
  getStr = () => "Hello World".toUpperCase()
}


class Log {  
  estrategia = null
  setEstrategia(estrategia){
    this.estrategia = estrategia
  }
  executa = () => console.log(this.estrategia.getStr())
}

const test = async () => {
  const log = new Log()
  
  log.setEstrategia(new HelloWorld())
  log.executa()
  
  log.setEstrategia(new HelloWorldMaiusculo())
  log.executa()
}

(async ()=>{ test() })()
