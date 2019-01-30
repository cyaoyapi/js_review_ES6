document.getElementById("submit").addEventListener('click', function(e){
	e.preventDefault();
	e.stopPropagation();
	let given_id = document.getElementById("patient_id").value;
	let regexp = /^(CS|IT|AB)[0-9]{3}$/i;
	if(regexp.test(given_id)) alert("It's OK");
	else alert("Bad entry!");
}, false);