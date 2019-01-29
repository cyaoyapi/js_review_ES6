/* Handling events in Javascript.
*/

// 

const sideEffectsManager = function(event){
	event.preventDefault();
	event.stopPropagation();
}

// Selecting the elements
let clic1 = document.getElementById('clic1');
let clic2 = document.getElementById('clic2');

// Adding Event Listerners
clic1.addEventListener('click', function(event){
	sideEffectsManager(event);
	alert("Clic me !");
})

clic2.addEventListener('click', event => {
	sideEffectsManager(event);
	alert("I repeat again : Clic me !");
})