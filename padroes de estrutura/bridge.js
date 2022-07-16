class Teclado {
  output = null
  constructor(output){
    this.output = output
  }
  escreve = () => { this.output.faz() }
}

class Conversa {
  output = null
  constructor(output){
    this.output = output
  }
  fala = () => { this.output.faz() }
}

class Tela {
  faz = () => { console.log("Escreveu na tela: Hello World") }
}

class Audio {
  faz = () => { console.log("Falei: Hello World") }
};

const test = async () => {
  const teclado = new Teclado(new Tela())
  const conversa = new Conversa(new Audio())
  teclado.escreve()
  conversa.fala()
}

(async ()=>{ test() })()