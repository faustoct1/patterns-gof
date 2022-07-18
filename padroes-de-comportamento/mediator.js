class Mediador {
  getStr = () => {
    throw "Precisa de implementação"
  }
}

class MediadorHello extends Mediador {
  getStr = () => "Hello World mediado pelo mediador Hello"
}

class MediadorWorld extends Mediador{
  getStr = () => "Hello World mediado pelo mediador World"
}


const test = exports.test = async () => {
  console.log((new MediadorHello()).getStr())
  console.log((new MediadorWorld()).getStr())
}

//(async ()=>{ test() })()
