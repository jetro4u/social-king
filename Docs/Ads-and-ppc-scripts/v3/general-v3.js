let general = `nz
gem
bold
best currency converter
canada
url
bold currency
bold subscription
best currency
bold subscriptions
survey monkey
url redirect
scroll to top
bold multicurrency
gem pages
bold cashier
auto currency switcher
shopify chat
gems
gem themes
post
url shortener
bold options
bold cashier
bold commerce
auto currency switcher
shopify chat
bold multicurrency
carrier
short url
aus post
spice gems
gem pa
vendors
currency convertor
currency
aus post
multi seller
plugin
bold membership
url parameter
url link
url amigables
gem stone
canada manufactor
bold multicurrency
back to top
top sellers
contents
content type
blog content
bold quiz
bold options
multi country pricing
multi channel
carriers
carrier api
auto multi currency converter
sendle carrier
real time carrier
multi vendor marketplace
multi seller`

let list = general.split(/\r|\n/)

console.log(list.toString())

let newList = list.map((keyword)=>{
	return `[${keyword}]`
})

console.log(newList.toString())