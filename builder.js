class Builder {
  str = ''
  buildHello = () => {
   this.str += 'Hello' 
  }
  buildSpace = () => {
    this.str += ' ' 
  }
  buildWorld = () => {
    this.str += 'World' 
  }
  build = () => this.str
}


const test = async () => {
  const builder = new Builder()
  builder.buildHello()
  builder.buildSpace()
  builder.buildWorld()
  const obj = builder.build()
  console.log(obj)
}

(async ()=>{ test() })()