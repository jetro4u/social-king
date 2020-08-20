wishlist king
variant king
variant title king
shirt king
seo king
kings camo
king


let king = `wishlist king
variant king
variant title king
shirt king
seo king
kings camo
king
`


let list = king.split(/\r|\n/)

console.log(list.toString())

let newList = list.map((keyword)=>{
	return `[${keyword}]`
})

console.log(newList.toString())