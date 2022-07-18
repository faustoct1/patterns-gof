class Facade{
  hello = () => "Hello"
  world = () => "World"
  helloworld = () => "World Hello"
  barraN = () => "\n"
}

const test = exports.test = async () => {
  const facade = new Facade()
  console.log(`${facade.barraN()} ${facade.hello()} ${facade.world()} ${facade.barraN()}`)
}

//(async ()=>{ test() })()