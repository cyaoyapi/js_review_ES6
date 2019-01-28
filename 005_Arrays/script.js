/* This program uses differents uses of lists in python.
*/

// list of men (name, age, salary)
let men = [
	{name:"Joe DONALD", age:43, salary:140206.500},
	{name:"Maxime VICTAL", age:33, salary:1000000.000},
	{name:"Mamkoul JAGA", age:57, salary:2345000.213}
];

let women = [
	{name:"Mafouta RICY", age:22, salary:1100000.500},
	{name:"Caroline DAVYLI", age:40, salary:800009.000},
	{name:"Jetaime Boteh", age:26, salary:487900},
	{name:"Vitaline KOUA", age:19, salary:2345000.213},
	{name:"Jacqueline Bouviama", age:57, salary:2345000.213},
	{name:"Joe CLARAM", age:57, salary:200500.213}
];

presentation = (people) => `${people.name}, ${people.age} old, earns ${people.salary}$ a yaer`;

console.log("===Program starts ===");
console.log("List of men : ");
men.forEach(man => console.log(presentation(man)));
console.log("List of women : ");
for(let woman of women){ 
	console.log(presentation(woman));
}

