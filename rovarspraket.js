/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

function max(a, b){
    if(a > b){
    	return(a)
    }
    else{
    	return(b)
    }
}
console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(isNaN(max("aaa","bbb")));

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

function maxOfThree(a, b, c){
    if(a > b && a > c){
        return(a)
    }
    if(b > a && b > c){
    	return(b)
    }
    if( c > b && c > a){
    	return(c)
    }
}

console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(entry){
    entry = entry.toString()
	var input = entry.toLowerCase()
	var vowels = ['a','e','i','o','u']
	var i
	console.log
	for(i=0; i < vowels.length; i++){
		if (vowels.indexOf(input[i]) == -1 ) {
	    	return(false)
	    
	   	}
	    else {
	    	
	    	return(true)
	    }
    
    }		
}   
    

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".

 */
// (word.charCodeAt(i) >= 97 && >= 122)

var isitletter = function(word){
	var word = word.toString()
	var justwords = ''
	for(i=0; i< word.length; i++){
		if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90  
			|| word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122){
				
				return(true)
			}		
		else {
			return(false)
		};
	}	
}




function rovarspraket(word){

    var vowels = ["a" , "e" , "i", "o" , "u"]
	var i
    var oldword = word.toString()
    var newword = ''
    for(i=0; i < oldword.length; i++){
    	if(isitletter(oldword) === true){

	    	if(vowels.indexOf(oldword[i]) == -1){
	         newword += oldword[i] + 'o' + oldword[i] 
	     	}
	     	else{
	         newword += oldword[i]
	     	}
	    }
	    else{
	    	newword += oldword
	    }

	}
	    return (newword)
}

console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse(str){
    var sentence = str
    var i 
    var backwards = ''
    for(i = sentence.length-1; i > -1; i--) {
    	backwards += sentence[i]
    }
    return(backwards)
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

// var anypuncuation = function(word){
// 	var word = word.toString()
// 	var justwords = ''
// 	for(i=0; i< word.length; i++){
// 		if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90  
// 			|| word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122){
// 				justwords += word[i]
	

// 		}		
	
// 	}	
// 	return(justwords)
// }


function findLongestWord(sentence){
 					
    var newword = sentence.split(" ")
    var longestword = ""
    var i
   	
    for (i = 0; i < newword.length; i++){
			if(newword[i].length > longestword.length){
			longestword = newword[i]
		}

    return(longestword)
	}
}

console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")

