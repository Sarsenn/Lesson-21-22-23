//1 задание
for(let i = 1; i <= 10; i++) {
	console.log(i)
}

// 2 задание
let sum = 0;
for (let i = 0; i <= 100; i++) {
	sum += i;
	console.log(sum)
}

//3 задание
let odd  = [];

for (let i = 0; i <= 20; i++) {

	if(i%2 == 0) {
		odd.push(i)
	}
}
console.log(odd)

//4 задание

let n = 5;
let nFatorial = 1;

for (let i = 1; i <= n; i++) {
	nFatorial *= i;
}

console.log(nFatorial)


// 5 задание 

let number = 8;
let sumNumbers = 0;

for (let i = 0; i <= number; i++) {
	sumNumbers += i;
}
console.log(sumNumbers)

// 6 задание

let string = "Hello!"
let stringArr = string.split("")
console.log(stringArr)

for (let i = 0; i <= stringArr.length; i++) {
	console.log(stringArr[i])
}

// 7 задание

let numbre = 21;
let multiplicity = 3;
let multiplicityNumber = []

for (let i = 1; i <= numbre; i++) {
	if (i % 3 == 0) {
		multiplicityNumber.push(i)
	}
}
console.log(multiplicityNumber)

// 8 задание

let stringNum = "AsSalamAleykum"
let stringNumbers = 0;
for (let i = 0; i <= stringNum.length; i++) {
	stringNumbers = i;
}
console.log(stringNumbers)


// 9 задание 

let arr = [2,34,5456,2342,342,432,5,235];

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i])
	
}


// 10 задание 

let sumArr = [1,10,34,56,2,5];
let arrSum = 0;

for (let i = 0; i < sumArr.length; i++) {
	arrSum += sumArr[i]
}
console.log(arrSum)


// 11 задание 

let posArr = [1,4,23,56,-1,-5,2,5];
let count = 0;

for (let i = 0; i < posArr.length; i++) {
	if(posArr[i] < 0) {
		count++;
	}	
}
if (count > 1) {
	console.log("Есть отрицательные элементы")
} else {
	console.log("Все элементы положительные.")
}

// 12 задание 

let arithmetic = [1,2,8,9,11,4,6];
let arithmeticSum = 0;
for (let i = 0; i < arithmetic.length; i++) {
	arithmeticSum += arithmetic[i];
}
console.log(arithmeticSum/arithmetic.length)

//13 задание 

let low = [4,-5,2,1,11,-7,1,3,-2,5]
let result = 0;

for (let i = 0; i < low.length; i++) {
		
	if(result > low[i]) {
		result = low[i]
	}
}
console.log(result)


//14 задание 

let arrNumber = [4,5,2,1,11,7,1,3,2,5]
let oddArr = 0;
let evenArr = 0;

for (let i = 0; i < arrNumber.length; i++) {

	if(arrNumber[i]%2 == 0 ) {
		evenArr += 1;
	} else {
		oddArr += 1;
	}
}
console.log(`Четных: ${evenArr}, Нечетных: ${oddArr}`)

//15 задание 
let negativeArr = [-1,5,3,2,-5,3,-10,-2];


for (let i = negativeArr.length - 1; i >= 0; i--) {
	if (negativeArr[i] < 0) {
		negativeArr.splice(i,1)
	
	}
	
}
console.log(negativeArr);