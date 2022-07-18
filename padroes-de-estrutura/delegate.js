class Palavra {
  getStr = () => {
    throw "Precisa de implementação"
  }
}

class Hello extends Palavra {
  getStr = () => "Hello"
}

class World extends Palavra {
  getStr = () => "World"
}

class Delegador {
  hello = () => {
    const hello = new Hello()
    return hello.getStr()
  }
  world = () => {
    const world = new World()
    return world.getStr()
  }
}

const test = exports.test = async () => {
  const delegador = new Delegador()
  console.log(`${delegador.hello()} ${delegador.world()}`)
}

//(async ()=>{ test() })()