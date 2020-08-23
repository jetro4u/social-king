let cms = `multi
multi vendor
bold multi
multi-currency
bold multi currency
bold multi
multi-currency
multi vendor
blogging
blog migrate
blogs
multi lingo
bold multi-currency
multi currency
blogs`


let list = cms.split(/\r|\n/)

console.log(list.toString())

let newList = list.map((keyword)=>{
	return `[${keyword}]`
})

console.log(newList.toString())