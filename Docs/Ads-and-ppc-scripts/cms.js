let cms = `blog
cms
content management system
multi-user blog
multi-user blogging platform
blogging platform
blog platform
blog cms
forum
forums
community
community blog
community forum
community blogging platform
community blogging system`


let list = cms.split(/\r|\n/)

console.log(list.toString())

let newList = list.map((keyword)=>{
	return `[${keyword}]`
})

console.log(newList.toString())

Last one: CMS Exact

[blog],[cms],[content management system],[multi-user blog],[multi-user blogging platform],[blogging platform],[blog platform],[blog cms],[forum],[forums],[community],[community blog],[community forum],[community blogging platform],[community blogging system]