/* Mouse events in Javascript.
*/

document.addEventListener('DOMContentLoaded', function(event){

	para_list = this.getElementsByTagName("p") ;
	console.log(para_list);
	for(para of para_list){
			para.addEventListener("mousemove", function(e){
				e.preventDefault();
				e.stopPropagation();
				console.log(`Mouse local location  : (${e.clientX}, ${e.clientY})`);
				console.log(`Mouse location relative current element : (${e.offsetX}, ${e.offsetY})`);
				console.log(`Mouse location relative the page : (${e.pageX}, ${e.pageY})`);
				console.log(`Mouse location relative the browser : (${e.screenX}, ${e.screenY})`);
				console.log(`Mouse location relative the last position : (${e.movementX}, ${e.movementY})`);
				console.log('=====================================');
			});
	}

}, false)

