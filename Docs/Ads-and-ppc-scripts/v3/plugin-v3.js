let plugin = `plugin seo
forum
forum
seo plugin
multi
aus post
community
canada post
seo blog
multi seller
bold multi currency
bold multi
plugin
post
seo image optimizer
content
plugin hive
spy on users
content change
auhorization user
users
user way
user identificator
post purchase survey
nz post
user
multi-currency
multi country pricing
bold multi-currency
network solutions
duplicate content removel
contents
content creater
category content
seo optimizer
seo app
plugin spoket
intra community vat number
community board`

let list = plugin.split(/\r|\n/)

console.log(list.toString())

let newList = list.map((keyword)=>{
	return `[${keyword}]`
})

console.log(newList.toString())