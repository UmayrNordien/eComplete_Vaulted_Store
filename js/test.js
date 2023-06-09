/* 
DISPLAY AN ARRAY OF THE PRODUCTS ON THE CONSOLE
shopContent variable selects .shop-content that holds all the shop products. 
The productBoxes variable is then created by calling Array.from() on the .shop-content element's child elements,
which converts them into an array
*/
const shopContent = document.querySelector('.shop-content');
const productBoxes = Array.from(shopContent.children);

console.log(productBoxes);