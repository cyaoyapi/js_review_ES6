import randomValue from './random.js';

async function sayHello(){
	let counter = await randomValue();
	console.log(`Selected number : ${counter}`);
	for(let i = 1; i <= counter; i++){
		console.log(`${i} time(s) => Hello`);
	}
}

sayHello();