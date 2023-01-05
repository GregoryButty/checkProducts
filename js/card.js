// <- При наводженні на корзину покупок з'являється віконце з вибраним товаром ->
const card = document.getElementById('card_id');
const windowCard = document.getElementById('window_card_id');

card.addEventListener('mouseover', function() {
    windowCard.style.display = 'block';
})

card.addEventListener('mouseout', function() {
    windowCard.style.display = "none";

    if (windowCard.style.display === "none") {
        windowCard.addEventListener('mousemove', function() {
            windowCard.style.display = 'block';
        })
    }
})

document.body.addEventListener('mouseout', function() {
    windowCard.style.display = 'none';
})
// <- При наводженні на корзину покупок з'являється віконце з вибраним товаром ->

// <====================================>

// <- Продукт додається до корзигни та убирається за необхідністі ->
// const addProductBtn = document.querySelectorAll('.btn_product');

// const itemsProduts = document.querySelectorAll('.items_products');
// const imgProduct = document.querySelector('.img_product');
// const infoProduct = document.querySelector('.info_product');
// const paragrapProduct = document.querySelector('.paragraph_product');
// const costProduct =document.querySelector('.cost_product');

// let getRandomIndex = function() {
//     return Math.random();
// }

// itemsProduts.forEach( element => {
//     element.id = getRandomIndex();
// })


// <-  ->