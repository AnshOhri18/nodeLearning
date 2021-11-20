//CommonJS , every file by default is  module
//Modules - Encapsulated Code (only share minimum)

const names = require('./4-names') // this is how we access some data/functions from other file
const sayHi = require('./5-sayHi')
const data = require('./6-alternative-flavor')

require('./7-mindGrenade')

console.log(data)

sayHi('susan')
sayHi(names.ansh)
sayHi(names.john)