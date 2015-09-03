/**
 * PART 1
 *
 * Write a function that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

function sum(a, b){
    var total = a + b
    return(total)
}

console.assert(sum(8, 11) === 19);
console.assert(sum(4, 100) === 104);

/**
 * PART 2
 *
 * write a function that finds the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

function GCD(a, b){

   if (a > b) {
   	var big = a
   	var little = b
   }
   else	{
   	var little = a
   	var big = b
   }
  
   if (big%little === 0) {
   	return(little)
   }
	else {
		return(GCD(little,big%little))
	}
}


console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);

/**
 * PART 3
 *
 * write a function that prints out the Least Common Multiple of two numbers
 */

function LCM(a, b){
    if (a * b === 0) return 0
	return(a * b / GCD(a,b))
}

console.assert(LCM(10,10) === 10)
console.assert(LCM(2,5) === 10)
console.assert(LCM(3,6) === 6)
console.assert(LCM(0,1) === 0)

/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
 */

function fizzbuzz(N){
	var number=1
	var trees=""
	while (number <= N) {
		if(number%3!==0 && number%5!==0){
			trees+='.'	
		}
		if(number%3==0 && number%5!==0){
			trees+='fizz'
		}
		if(number%3!==0 && number%5==0){
			trees+='buzz'
		}
		if(number%3==0 && number%5==0){
			trees+='fizzbuzz'
		}
		number++
	}
	return(trees)
}

console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")