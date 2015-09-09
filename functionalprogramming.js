//  Part I

// ----------------------------
// write your own forEach() function that takes an array and a function
// ----------------------------

function forEach(array, callback){
    var newarray = [];

    for(var i = 0; i < array.length; i ++){
         var newvalue = callback(array[i]) 
         newarray.push(newvalue)

    }
}

// tests
// ---
var total = 1
forEach([1, 2, 3, 4], function(a){ total *= a; })
console.assert(total === 24)

// ----------------------------
// using forEach() from above, write your own reduce()
// that takes an array and a function
// ----------------------------

function reduce(array, callback){

    var total = array[0]

  
  forEach(array, function(element){
      total = callback(element,total)
  })
  return total

}
    
//     var total = array[0]
//     for( var i = 1; i < array.length; i++){
//         total = callback(array[i], total)
//     }
//     return(total)
// }
// tests
// ---
console.assert(
    reduce([1, 2, 3, 4], function(a, v){ return a*v }) === 24
)

// ----------------------------
// using forEach() from above, write your own map()
// that takes an array and a function
// ----------------------------

function map(array, callback){
    var newarray = []  
    
    forEach(array, function(element){
        newarray.push(callback(element, array))
        return(newarray)
    })
   return(newarray)
}  

// tests
// ---

var squares = map([1, 2, 3, 4], function(v){ return v*v })
console.log('here come squares')
console.log(squares)
console.assert(squares[0] === 1)
console.assert(squares[1] === 4)
console.assert(squares[2] === 9)
console.assert(squares[3] === 16)

// ----------------------------
// using reduce() from above, write your own filter()
// that takes an array and a function
// ----------------------------

function filter(array, callback){
    // YOUR CODE HERE
// var total = array[0]
var newarray = []
var total = array[0]   
    
    reduce(array, function(element){
        total = callback(element, total)
            if(total === true){
                newarray.push(element)
            }
        
    })
    return(newarray)
}
//     for(var i = 0; i < array.length; i ++){
//         total = callback(array[i], total)
//         if(total === true){
//             newarray.push(array[i])
//             console.log(newarray)
//         }
//     } 
//     return(newarray)  
// }

// tests
// ---

var evens = filter([1, 2, 3, 4], function(v){ return v%2 === 0 })
console.log('here comes evens')
console.log(evens)
console.assert(evens[0] === 2)
console.assert(evens[1] === 4)


