let competitors = `emoji
emoji blog
emoji cms
shopicial
xenforum
shopify
tracktor
shopify ping
section
easy tabs
easy gdpr
ultimate
easy contact form
facebook shop
shopify email
shopify pos
sky pilot
instagram shop
united states
shop
buy me
shopify local delivery
book
free shipping bar
books
trust
disable right click
google shopping feed
shop sync
compre-me
shopify local delivery
facebook
discount ninja
booking
charge me later
hero
free shipping bar
facebook chat
sections
google tag manager
sections anywhere
appointment booking
benchmark hero
section feed
google
section hub
trusted
trust hero
bookings
trust me
ultimate trust badges
patreon
shopify chat
shopify chat
insta feed
book keeping
candyrack
coins
quick books
trustpulse
mailchimp for shopify
discounted pricing by booster apps
booking appointment
trust badges
advanced cash on delivery
google shopping
ceo
contact
restaurant booking
booking calendar
book that
sweet
shopify flow
easy location
easy faq
price
compared price
zoho books
look book
book cansel
tags
growth hero
client area
easy
price calculator
measurement price calculator
hide price
compare price
book an appointment
pilot
auto pilot
user-generated content
user-generated content strategy
content strategy
aus post
united states post
uk post
google analytics
cash on`

let list = competitors.split(/\r|\n/)

console.log(list.toString())

let newList = list.map((keyword)=>{
	return `[${keyword}]`
})

console.log(newList.toString())
