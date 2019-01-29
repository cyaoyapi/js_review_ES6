/* DOM elements editing.
*/

let family_yao = document.querySelectorAll("#family1 p");
console.log("Family YAO members : ")
for(member of family_yao){
	member.textContent += " YAO";
	console.log(`${member.className.toUpperCase()} : ${member.textContent}`);
}
console.log("Add a new family : ");
new_family = document.createElement("div");
new_family.classList.add("family");
new_family.setAttribute("id", "family4");
new_family.style.color = 'purple';
new_family.innerHTML = `<p class="father">Silas</p>
			 				<p class="mother">Josephine</p>
			 				<div class="children">
			 					<p class="boy">Emmanuel</p>
			 					<p class="boy">Joseph</p>
			 					<p class="boy">Justin</p>
			 				</div>`;
document.querySelector("body").appendChild(new_family);
new_family.querySelectorAll("p").forEach(member => console.log(`${member.className.toUpperCase()} : ${member.textContent}`))
console.log("Removing the last child of this family : ");
children = new_family.querySelectorAll("div.children p");
last_child = children[children.length -1];
new_family.querySelector("div.children").removeChild(last_child)
new_family.querySelectorAll("p").forEach(member => console.log(`${member.className.toUpperCase()} : ${member.textContent}`))
