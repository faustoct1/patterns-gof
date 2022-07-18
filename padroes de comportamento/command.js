class Commando {
  executa = () => "Hello World"
}

class CommandoSemEspaco {
  executa = () => "HelloWorld"
}


class Executor {
  obj = null
  constructor(obj){
    this.obj = obj
  }
  executa = () => this.obj.executa()
}

const test = async () => {
  console.log((new Executor(new Commando())).executa())
  console.log((new Executor(new CommandoSemEspaco())).executa())
}

(async ()=>{ test() })()
