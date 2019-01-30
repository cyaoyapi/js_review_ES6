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

// Asynchronus : Using callback promises
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