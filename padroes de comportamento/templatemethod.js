class MetodoTemplate {
  getStr() { return "Hello World" }
}

class HelloWorld extends MetodoTemplate {  
}

class HelloWorldMinusculo extends MetodoTemplate {  
  getStr = () => super.getStr().toLocaleLowerCase()
}

class HelloWorldMaiusculo extends MetodoTemplate {  
  getStr = () => super.getStr().toUpperCase()
}

const test = async () => {
  console.log((new HelloWorld()).getStr())
  console.log((new HelloWorldMinusculo()).getStr())
  console.log((new HelloWorldMaiusculo()).getStr())
}

(async ()=>{ test() })()
