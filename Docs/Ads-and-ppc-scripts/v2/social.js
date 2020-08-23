let social = `whats
pay what you want
what
whatsapp share
login
profile
whatsapp 2.0
wechat login
login with otp
login by number
login authentication
favcebook login
client login
whats appchat
sub users
profiling
oxi login
whatsapp share
share this`

let list = social.split(/\r|\n/)

console.log(list.toString())

let newList = list.map((keyword)=>{
	return `[${keyword}]`
})

console.log(newList.toString())