class Cadeia {
  str = ''
  next = null
  constructor(obj,str){
    this.str = str
    this.next = obj
  }
  handle = () => {
    return `${this.str}${this.next ? this.next.handle() : ''}`
  }
}

const test = async () => {
  new Cadeia(' ',)
  const instance = new Cadeia(new Cadeia(new Cadeia(null,'World'),' '),'Hello')
  console.log(instance.handle())
}

(async ()=>{ test() })()
