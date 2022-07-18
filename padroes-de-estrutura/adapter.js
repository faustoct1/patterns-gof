class ConsoleHelloWorld {
  log = () => {
    console.log('Hello World')
  }
}

class HelloWorldAdaptador {
  getStr = () => {
    throw "Precisa de implementação"
  }
}

class GetHelloWorld extends HelloWorldAdaptador {
  instance = new ConsoleHelloWorld()
  getStr = () => {
    this.instance.log()
    return "Hello World"
  }
}

const test = exports.test = async () => {
  const instance = new GetHelloWorld()
  console.log(instance.getStr())
}

//(async ()=>{ test() })()
