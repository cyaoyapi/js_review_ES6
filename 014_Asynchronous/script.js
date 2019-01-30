let ret1 = 0;
setTimeout(function(){
	ret1 += 1;
	console.log(`I'am in joy(${ret1} time)`);
}, 5000);
let ret2 = 0;

let identifier = window.setInterval(function(){
	ret2 += 1;
	console.log(`I'am in joy joy(${ret2} time)`);
	if(ret2 === 5){
		clearInterval(identifier);
	}
}, 5000);




