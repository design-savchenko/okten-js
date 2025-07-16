'use strict';

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`);
for (let object of listOfItems) {
    document.write(`<li>${object}</li>`);
}
document.write(`</ul>`);