'use strict'

const categoryEl = document.querySelectorAll('.item');
console.log('Number of categories: ', categoryEl.length);

categoryEl.forEach(element => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Category: ${title}, Elements: ${itemsLength}`);
});