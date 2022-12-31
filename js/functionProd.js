function myShowProd(prod){
    return prod;
}

function myOneProd(product){
    product.forEach( function(item) {
        console.log(item);
        console.log(item.name);
    })
}

function myCheckProduct(checkProd) {
    for (let i = 0; i < checkProd.length; i++) {
        console.log(checkProd[i].name)
    }
}

export { myShowProd, myOneProd, myCheckProduct }