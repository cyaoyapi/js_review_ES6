/* This program uses a web service API to generate passwords. 
*/

document.getElementById('btn_action').addEventListener('click', function(e){
	e.preventDefault();
	e.stopPropagation();
	let city = document.getElementById("city").value
	let request = new XMLHttpRequest();
	let displayZone = document.getElementById("displayZone");
	request.onreadystatechange = function(){
		if(this.readyState === XMLHttpRequest.DONE && this.status === 200){
			let response = JSON.parse(this.responseText);
			displayZone.innerHTML = `<p>
			<strong>City</strong> : ${response.city_info.name}<br>
			<strong>Pressure</strong> : ${response.current_condition.pressure}<br>
			<strong>Humidity</strong> : ${response.current_condition.humidity}<br>
			<strong>Condition key</strong> : ${response.current_condition.condition_key}<br>
			</p>`;
	
		}
	};
	request.open('GET', `https://www.prevision-meteo.ch/services/json/${city}`);
	request.send();
});
