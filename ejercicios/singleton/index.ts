import Singleton from './Singleton'

const a = Singleton.getInstace()
const b = Singleton.getInstace()

console.log('A es igual a B', a === b)