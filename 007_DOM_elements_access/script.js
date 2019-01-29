/* DOM elements selection.
*/

const family1 = document.getElementById('family1');
console.log(`Element with id 'family1' is a : ${family1.tagName}`);
const families = document.getElementsByClassName('family');
console.log(`There are ${families.length} families in the list.`);
const paragraphs = document.getElementsByTagName('p');
console.log(`The second paragraph contains : ${paragraphs[1].textContent}`);
const first_child = document.querySelector('div.children p');
console.log(`The fisrt child on the list is : ${first_child.textContent}`);
const children = document.querySelectorAll('div.children p');
console.log(`There are ${children.length} children in the list.`)
console.log(`The last child on the list is : ${children[children.length -1].textContent}`);
console.log(`${paragraphs[2].textContent}'s wife is ${paragraphs[2].nextElementSibling.textContent}`);
console.log(`First family members : `);
console.log(`${family1.textContent}`);
console.log(`${paragraphs[9].textContent}'s husband is ${paragraphs[9].previousElementSibling.textContent}`);