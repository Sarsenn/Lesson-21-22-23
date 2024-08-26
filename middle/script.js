//1 задача
/* let word = "Hello, world!"
let arrWord = word.split("")
let wordRevers = []
let i = word.length; 
while (i > 0){
	wordRevers.push(arrWord[i - 1])
	i--;
}
console.log(wordRevers.join("")) */


//2 задача 

/* let minNum = [1,34,2,3232,123,32,1,2345,65,421,-11,23];
let i = 0;
let result = minNum[0];

while(i < minNum.length) {

	if(result > minNum[i]) {
		result = minNum[i]
		
	}
	i++;
} */

//3 задача

/* let word = 'Hello!'
let i = 0;
let vowels = 0;
let letter = 0;
while (i < word.length) {

	if(word[i].includes('a') || word[i].includes('e') || word[i].includes('i') || word[i].includes('o') || word[i].includes('u')) {
		vowels += 1;
	}else {
		letter += 1;
	}
	i++;
}
console.log(`Гласных букв: ${vowels} Согласных букв: ${letter}`) */

//4 задача 

/* let arr1 = ['asdada','asdad','sfdsdf'];
let arr2 = [1,4,23,32,34,532,32];
let i = 0;

while (i < arr1.length) {
	arr2.push(arr1[i])
	i++;
}

console.log(arr2); */


// 5 задача 

/* let arr = ['Almaty','Aktau','Almaty','Astana','Almaty'];
let arr2 = []
let i = 0;

while(i < arr.length) {

	if(!arr2.includes(arr[i])) {
		
		arr2.push(arr[i])
	}
	i++;
}
console.log(arr2) */


// 6 задача 

/* let palindrom = ['п','о', 'т', 'о','п'];
let palindromStr = palindrom.join('');
let reversStr = "";
let i = palindrom.length - 1;

while( i >= 0) {
	 reversStr += palindrom[i];
	i--;
}
if( reversStr == palindromStr) {
	console.log('Это полиндром!')
} */


//7 задача 

/* let strPalindrom = 'казак';

if (strPalindrom == strPalindrom.split('').reverse().join(''))  {
	console.log('Это полиндром!')
} else {
	console.log('Это  не полиндром!')
} */

// 8 задача 

/* let str = 'Hello my name is Sarsen';
let strArr = str.split(" ");
console.log(strArr)
let count = 0;

let i = 0;
while ( i < strArr.length) {

	if (strArr[i].match(/\S+/)) {
		count ++;
	}
	i++;
}

console.log(count); */

// 9 задача 

/* let i = 0;
let count = 0;

while (i < 14) {
	count += 7;
	console.log(count)
	i++;
} */

//10 задача 

let num = +prompt('Дай мне число!');
let numBase = 2;
let result = 0;
let i = 0;

while( i < num) {
	if(Math.pow(numBase, i) <= num) {
		result = Math.pow(numBase, i);
	}
	i++;
}

console.log(result)