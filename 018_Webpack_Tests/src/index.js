import randomValue from './random.js';

async function sayHello(){
	let elt = document.createElement("div");
	let counter = await randomValue();
	elt.innerHTML += `Selected number : ${counter}<br>`;
	for(let i = 1; i <= counter; i++){
		elt.innerHTML += `${i} time(s) => Hello<br>`;
	}
	document.getElementsByTagName("body")[0].appendChild(elt);
}

sayHello();