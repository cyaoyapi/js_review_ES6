const sideEffectsManager = function(event){
	event.preventDefault();
	event.stopPropagation();
}

// Asynchronus : Using callback functions
let btn_callback = document.getElementById("btn_callback");
btn_callback.addEventListener('click', function(e){
	sideEffectsManager(e);
    alert("Events' Listeners are asynchronous functions using callbacks");
     	window.setTimeout(function(){
          	alert("setTimeout, setInterval,...are also asynchronous functions using callbacks");
    }, 1000);

}, false);

// Asynchronus : Using promises
let btn_promise = document.getElementById("btn_promise");
btn_promise.addEventListener('click', function(e){
	sideEffectsManager(e);
	let myPromise = new Promise((resolve, reject) => {
		alert("Promise test : Initial...");
		resolve();
	});

    myPromise
    .then(() => alert("Promise OK!"))
    .then(() => {
    	throw new Error("Promise Error!");
    	alert("Do not excute this!");
    })
    .catch(() => alert("Promise Error!"))
    .then(() => alert("All is good!"))

}, false);


// Asynchronus : Using async and await

let btn_async_await = document.getElementById("btn_async_await");
btn_async_await.addEventListener('click', function(e){
	sideEffectsManager(e);
	async function randomValue(){
		return Math.floor((Math.random() * 100));
	}

	async function calculate(){
		let number1 = await randomValue();
		let number2 = await randomValue();
		alert(`${number1} + ${number2} = ${number1 + number2}`);
	}

	calculate();
	

}, false);