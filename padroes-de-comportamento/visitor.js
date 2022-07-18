class Visitante {
  str = ''
  visita(obj) { this.str += obj.getStr() }
  getStr = () => this.str
}

class HelloVisitado {  
  aceitaVisitante = (obj) => obj.visita(this)
  getStr = () => "Hello"
}

class EspacoVisitado {  
  aceitaVisitante = (obj) => obj.visita(this)
  getStr = () => " "
}

class WorldVisitado {  
  aceitaVisitante = (obj) => obj.visita(this)
  getStr = () => "World"
}

const test = exports.test = async () => {
  const visitante = new Visitante()
  new HelloVisitado().aceitaVisitante(visitante)
  new EspacoVisitado().aceitaVisitante(visitante)
  new WorldVisitado().aceitaVisitante(visitante)
  console.log(visitante.getStr())
}

//(async ()=>{ test() })()
