class HelloWorld {
  getStr = () => "helloworld"
}

class Interpretador {
  interpreta = (obj) => {
    throw "Precisa de implementação"
  }
}

class InterpretaComEspaco extends Interpretador {
  interpreta = (obj) => {
    const str = obj.getStr()
    const hello = str.split('world')[0]
    const world = str.split('hello')[1]
    return `${hello[0].toUpperCase()}${hello.slice(1)} ${world[0].toUpperCase()}${world.slice(1)}`
  }
}

class InterpretaComEspacoETudoMaiusculo extends Interpretador {
  interpreta = (obj) => {
    const str = obj.getStr()
    const hello = str.split('world')[0].toUpperCase()
    const world = str.split('hello')[1].toUpperCase()
    return `${hello} ${world}`
  }
}

const test = async () => {
  console.log((new InterpretaComEspaco()).interpreta(new HelloWorld()))
  console.log((new InterpretaComEspacoETudoMaiusculo()).interpreta(new HelloWorld()))
}

(async ()=>{ test() })()
