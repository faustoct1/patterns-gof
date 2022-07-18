class AbstractFactory {
  createHelloWorldA = () => {
    throw "Precisa de implementação" 
  }
  createHelloWorldB = () => {
    throw "Precisa de implementação" 
  }
}

class Factory1 extends AbstractFactory {
  createHelloWorldA = () => {
    return new HelloWorldA1('Hello World A1 foi criado pela Factory1')
  }
  createHelloWorldB = () => {
    return new HelloWorldB1('Hello World B2 foi criado pela Factory1')
  }
}

class Factory2 extends AbstractFactory {
  createHelloWorldA = () => {
    return new HelloWorldA2('Hello World A1 foi criado pela Factory2')
  }
  createHelloWorldB = () => {
    return new HelloWorldB2('Hello World B2 foi criado pela Factory2')
  }
}

class AbstractHelloWorldA {
  str = ''
  constructor(str){
    this.str = str
  }
  print = () => {
    console.log(this.str)
  }
}

class HelloWorldA1 extends AbstractHelloWorldA {
  constructor(str){
    super(str)
  }
}

class HelloWorldA2 extends AbstractHelloWorldA {
  constructor(str){
    super(str)
  }
}

class AbstractHelloWorldB {
  str = ''
  constructor(str){
    this.str = str
  }
  print = () => {
    console.log(this.str)
  }
}

class HelloWorldB1 extends AbstractHelloWorldB {
  constructor(str){
    super(str)
  }
}

class HelloWorldB2 extends AbstractHelloWorldB {
  constructor(str){
    super(str)
  }
}

const test = exports.test = async () => {
  const factory1 = new Factory1()
  const factory2 = new Factory2()
  factory1.createHelloWorldA().print()
  factory1.createHelloWorldB().print()
  factory2.createHelloWorldA().print()
  factory2.createHelloWorldB().print()

}

//(async ()=>{ test() })()