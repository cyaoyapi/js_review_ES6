// Testing events related the form elements.

const sideEffectsManager = function(event){
	event.preventDefault();
	event.stopPropagation();
}

let mySelect = document.querySelector("select");
mySelect.addEventListener('change', function(e){
	sideEffectsManager(e);
	alert(`You choose : ${e.target.value}`);
}, false)

let myInput= document.querySelector("input");
let mySpan= document.querySelector("span");
myInput.addEventListener('input', function(e){
	sideEffectsManager(e);
	mySpan.textContent = e.target.value; 
}, false)