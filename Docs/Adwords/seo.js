let seo = `seo doctor
page speed optimizer by booster apps
seo site audit
all in one seo 
all in 1 seo
fire amp
smart seo
seo site audit
seo plus
seo onpage
seo json-ld boost
seo boost
booster apps
Page Speed Booster`


let list = seo.split(/\r|\n/)

console.log(list.toString())

let newList = list.map((keyword)=>{
	return `[${keyword}]`
})

console.log(newList.toString())