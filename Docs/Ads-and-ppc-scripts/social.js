let social = `
social
social share
social login
user profile
user interface
whats app
whatsapp
hull social login
`


let list = social.split(/\r|\n/)

console.log(list.toString())

let newList = list.map((keyword)=>{
	return `[${keyword}]`
})

console.log(newList.toString())