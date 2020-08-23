let competitors = `
free trust badge
google shopping
plug in seo
trust hero
shop
shop sync
trusted site
trusted
section feed
insta
shopify email
advanced cash on delivery
facebook shop
coin by shoppad
trustpulse
insta feed
google shopping feed
ultimate trust badges
facebook shop
social photos
trust badges
socialphotos
shoppad
one click social login
fb messenger
advanced cash on delivery for india
recart
plug in
candyrack
sweet
google
recart fb
trust pulse
facebook post
facebook chat
plug
trust pilot
trust me
trust
hive
google tag manager
retargeting app
booking app
discounted pricing by booster apps
booking app
easy contact form
sweet
tracktor by shoppad
instagram shop
facebook live
facebook
plugging patreon
plug in seoul
plug in sec
plug in eso
plug in ceo
trusted clients
free trust
`

let list = competitors.split(/\r|\n/)

console.log(list.toString())

let newList = list.map((keyword)=>{
	return `[${keyword}]`
})

console.log(newList.toString())