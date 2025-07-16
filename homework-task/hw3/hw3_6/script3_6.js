'use strict';

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'img/1.png',
    },
    {
        title: 'juice',
        price: 27,
        image: 'img/2.png',
    },
    {
        title: 'tomato',
        price: 47,
        image: 'img/3.png',
    },
    {
        title: 'tea',
        price: 15,
        image: 'img/4.png',
    },
];

for (const product of products) {
    document.write(`
        <div class="products-wrapper">
             <div class="product-card">
                <h3 class="product-title">${product.title.toUpperCase()} Price – ${product.price}</h3>
                <img class="product-image" src="${product.image}" alt="">
             </div>
         </div>
    `);
}