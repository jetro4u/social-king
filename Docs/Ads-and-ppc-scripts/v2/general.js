let general = `top apps
top app
top
best apps
best app
best
social network
social network app
chatting app
chat app
shopping app
shop app
app
plugin seo
seo app
seo
multi
bold multi currency
canada post
bold multi
multi-currency
seo image optimizer
multi vendor
user gems
url post
post purchase survey
nz post
user
multi lingo
multi-lingo
multi language
multi-language
multi carrier
multi-carrier
bold multi-currency
network
content
seo optimizer`

let list = general.split(/\r|\n/)

console.log(list.toString())

let newList = list.map((keyword)=>{
	return `[${keyword}]`
})

console.log(newList.toString())