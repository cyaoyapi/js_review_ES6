/* Promises review.
*/

// Old way to make asynchronous with callback function


async function randomValue(){
	return Math.floor(Math.random() * 10);
}

Promise
.all([randomValue(), randomValue()])
.then(function(results){
	console.log(`${results[0]} + ${results[1]} = ${results[0] + results[1]}`);
});
