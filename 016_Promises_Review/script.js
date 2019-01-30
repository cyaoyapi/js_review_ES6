/* Promises review.
*/
let divinePromise = new Promise(function(resolve, reject){
		let flag = Math.floor(Math.random() * 10)
		if(flag > 5){
			resolve();
		}
		else{
			reject();
		}
	
});

function neverFails(){
	console.log("God's promise never fails");
}

function delayed_promise() {
	console.log("If God's promise delays, believe and wait, it never fails.");
}


divinePromise.then(neverFails, delayed_promise);

