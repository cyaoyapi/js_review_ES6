import randomValue from './random.js';
import style from './style.css';

async function sayHello(){
	let elt = document.createElement("div");
	let counter = await randomValue();
	elt.innerHTML += `<p>Selected number : ${counter}</p>`;
	for(let i = 1; i <= counter; i++){
		elt.innerHTML += `<p>${i} time(s) => <span>Hello</span></p>`;
	}
	document.getElementsByTagName("body")[0].appendChild(elt);
}

sayHello();