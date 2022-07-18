class Memento {
  str = ''
  constructor(str){
    this.str = str
  }
  getStr = (index) => this.str[index] ? this.str[index] : ''
}

const test = async () => {
  const memento = new Memento('Hello World')
  let str = ''
  let char = null
  let index = 0
  while(char!=''){
    char = memento.getStr(index++)
    str += char
  }
  console.log(str)
}

(async ()=>{ test() })()
