class Factory {
  factory = () => {
    throw "Precisa de implementação"
  }
}

class Factory1 extends Factory {
  factory = () => {
    return "Hello World"
  }
}

class Factory2 extends Factory {
  factory = () => {
    return "H e l l o  W o r l d"
  }
}


const test = exports.test = async () => {
  const f1 = new Factory1()
  const f2 = new Factory2()
  console.log(f1.factory())
  console.log(f2.factory())
}

(async ()=>{ test() })()