class Palavra {
  palavra = null
  constructor(palavra){
    this.palavra = palavra
  }
  getStr = () => { }
}

class Hello extends Palavra {
  str = 'Hello'
  palavra = null
  constructor(palavra){
    super(palavra)
    this.palavra = palavra
  }
  getStr = () => { return `${this.str} ${this.palavra ? this.palavra.getStr():''}` }
}

class World extends Palavra {
  str = 'World'
  palavra = null
  constructor(palavra){
    super(palavra)
    this.palavra = palavra
  }
  getStr = () => { return `${this.str} ${this.palavra ? this.palavra.getStr():''}` }
}

class BarraN extends Palavra {
  str = '\n'
  palavra = null
  constructor(palavra){
    super(palavra)
    this.palavra = palavra
  }
  getStr = () => { return `${this.str} ${this.palavra ? this.palavra.getStr():''}` }
}

const test = exports.test = async () => {
  const helloworld = new BarraN(new Hello(new World(new BarraN())))
  console.log(helloworld.getStr())
}

//(async ()=>{ test() })()