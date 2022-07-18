class HelloWorld {
  getStr = () => "Hello World"
}

class NaoHelloWorld {
  getStr2 = () => "Não é Hello World"
}

class NaoHelloWorldProxy extends HelloWorld {
  instance = new NaoHelloWorld()
  getStr = () => this.instance.getStr2()
}

const proxy = (p) => {
  console.log(p.getStr())
}

const test = exports.test = async () => {
  proxy(new HelloWorld())
  try{
    proxy(new NaoHelloWorld())
  }catch(e){
    console.log('Erro essa classe não tem método getStr')
  }
  proxy(new NaoHelloWorldProxy())
}

//(async ()=>{ test() })()
