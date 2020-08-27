let cms = `migration
best currency converter
migrate
forum
best currency
auto currency switcher
bold cashier
multi
bold multicurrency
bold commerce
community
forums
platforms
bold multi
currency convertor
multi seller
platforms
front systems
warranty platform
clyde-warranty-platform
cms
blog
squareup migration
sections migrator
migrate blogger
domain migration
blogging
blog types
multi fixel
currency selector
coin currency converter
avada currency converter
rock solid internet system
revel systems by kosmos esync
lock system
kitchen display system
finance system
dear systems
bundlify by harshini systems
trading platforms
platform
intra community vat`


let list = cms.split(/\r|\n/)

console.log(list.toString())

let newList = list.map((keyword)=>{
	return `[${keyword}]`
})

console.log(newList.toString())
