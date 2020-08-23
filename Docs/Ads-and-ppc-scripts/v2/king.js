let king = `title
wishlist plus
shirtly
wishlist
varient king
seo image optimizer
variant changer
title layout
collapse title
adicionar variantes carrinho
variants options
variant hider
wishlist hero
simply wishlist`

let list = king.split(/\r|\n/)

console.log(list.toString())

let newList = list.map((keyword)=>{
	return `[${keyword}]`
})

console.log(newList.toString())