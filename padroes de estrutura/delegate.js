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

const test = async () => {

}

(async ()=>{ test() })()