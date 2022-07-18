class Commando {
  executa = () => "Hello World"
}

class Executor {
  obj = null
  constructor(obj){
    this.obj = obj
  }
  executa = () => this.obj.executa()
}

const test = async () => {
  const executor = new Executor(new Commando())
  console.log(executor.executa())
}

(async ()=>{ test() })()
