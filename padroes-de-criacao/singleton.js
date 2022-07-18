class Singleton {
  str = 'Hello World'
  static instance = null
  static getInstance = () => {
    if(!this.instance){
      this.instance = new Singleton()
    }
    return this.instance
  }
  getStr = () => this.str
}

const test = exports.test = async () => {
  const instance = Singleton.getInstance()
  console.log(instance.getStr())
}

(async ()=>{ test() })()