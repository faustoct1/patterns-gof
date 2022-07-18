class Estado {
  str = ''
  manipularEstado(str){
    this.str += str
  }
  getStr = () => this.str
}

class Hello extends Estado {  
  manipularEstado(str){
    super.manipularEstado(`Hello${str}`)
  }
}

class Espaco extends Hello {  
  manipularEstado(str){
    super.manipularEstado(` ${str}`)
  }
}

class World extends Espaco {
  manipularEstado(str){
    super.manipularEstado(`World`)
  }
}

const test = exports.test = async () => {
  const hw = new World()
  hw.manipularEstado()
  console.log(hw.getStr())
}

//(async ()=>{ test() })()
