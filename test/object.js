/* let user = new Object(); */

let person = {
	"name":'Sarsen',
	age: 24,
	isMale: true,
	bank:{
		bankName:"Kaspi Bank",
		cardName:'12eawdae21123'
	}
}; 

console.log(person);
console.log(person.name);
console.log(person["isMale"])

person.city = 'Almaty';

console.log(person.city);
console.log(person.bank.bankName);
console.log(person.country);