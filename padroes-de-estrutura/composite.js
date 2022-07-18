class Palavra {
  palavra = null
  str = null
  constructor(palavra,str){
    this.str = str
    this.palavra = palavra
  }
  print = () => { console.log(`${this.str} ${this.palavra.str} `) }
}

class Hello extends Palavra {
  constructor(palavra){
    super(palavra ? palavra : null,'Hello')
  }
}

class World extends Palavra {
  constructor(palavra){
    super(palavra ? palavra : null,'World')
  }
}

const test = async () => {
  const helloworld = new Hello(new World())
  helloworld.print()
}

(async ()=>{ test() })()