class Prototype {
  str = 'Hello World'
  constructor(str){
    this.str = str
  }
  get = () => this.str
  clone = () => {
    throw "Precisa de implementação"
  }
}

class HelloWorld1 extends Prototype {
  constructor(str){
    super(str)
  }
  clone = () => {
    return new HelloWorld1('Hello World1')
  }
}

class HelloWorld2 extends Prototype {
  constructor(str){
    super(str)
  }
  clone = () => {
    return new HelloWorld2('Hello World2')
  }
}


const test = async () => {
  const hw1 = new HelloWorld1('Hello World1')
  const hw2 = new HelloWorld2('Hello World2')
  console.log(hw1.get(),hw1===hw1,hw1===hw1.clone())
  console.log(hw2.get(),hw2===hw2,hw2===hw2.clone())
}

(async ()=>{ test() })()