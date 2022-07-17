class FlyweightFactory {
  cache = {}
  get = (name) => {
    if(this.cache[name]){
      return new Promise((resolve, reject) => {
        resolve(this.cache[name])
      });
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.cache[name] = name
        resolve(name)
      },3000)
    });
  }
}

const test = async () => {
  const instance = new FlyweightFactory()

  const promise1 = await Promise.all([
    instance.get('Hello'),
    instance.get(' '),
    instance.get('World'),
  ])
  console.log(`${promise1[0]}${promise1[1]}${promise1[2]}`)

  const promise2 = await Promise.all([
    instance.get('Hello'),
    instance.get(' '),
    instance.get('World'),
  ])
  console.log(`${promise2[0]}${promise2[1]}${promise2[2]}`)
}

(async ()=>{ test() })()
