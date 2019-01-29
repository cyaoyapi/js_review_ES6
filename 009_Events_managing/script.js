/* Handling events in Javascript.
*/

// Selecting the elements
let clic1 = document.getElementById('clic1');
let clic2 = document.getElementById('clic2');

// Adding Event Listerners
clic1.addEventListener('click', function(event){
	alert("Clic me !");
})

clic2.addEventListener('click', event => {
	alert("I repeat again : Clic me !");
})