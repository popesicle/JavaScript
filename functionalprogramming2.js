// using our own forEach(), map(), reduce(), and filter()
// functions written in js-functions-functional-practice-1


// -----------
// Write a function pluck() that extracts a list of
// values associated with property names.
// -----------
function pluck(list, propertyName) {
    // YOUR CODE HERE
    var newarray= []
    
    list.forEach(function(obj){
        newarray.push(obj[propertyName])
    })

    return(newarray)
}

// tests
// ---
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}]
console.assert(pluck(stooges, 'name')[0] === 'moe')
console.assert(pluck(stooges, 'age')[2] === 60)

// -----------
// Write a function reject() that does the opposite of filter,
// if the callback function returns a "truthy" value then that
// item is **not** inserted into the new collection,
// otherwise it is.
// -----------
function reject(list, predicate) {
    // YOUR CODE HERE
    var filterCallback = function(num){
        if(!predicate(num)) return true
    }
    
    var filtered = list.filter(filterCallback)
    
    
    return(filtered)

}

// tests
// ---
var lt10 = [0,1,2,3,4,5,6,7,8,9,10]
var odds = reject(lt10, function(n){ return n%2 === 0 })
console.assert(odds[0] === 1)
console.assert(odds[1] === 3)
console.assert(odds[4] === 9)

// -----------
// Write a function find() that returns the very first item
// in a collection when the callback function returns true;
// otherwise returns undefined.
// -----------
function find(list, predicate) {
    // YOUR CODE HERE 
    var newObject = {}
    var forEachCallBack = function(obj){
        if(predicate(obj)){
           newObject = obj
        }
    }
    list.forEach(forEachCallBack)
    return(newObject)
}
// tests
// ---
var people = [
    {name: "Justin", teaches: "JS"},
    {name: "Jwo", teaches: "Ruby"},
    {name: "Dorton", teaches: "life"}
]

var JS = find(people, function(n){ return n.teaches === "JS" })
console.assert(JS.name === "Justin")

// -----------
// Write a function where() that filters for all the values
// in the properties object.
// -----------
function where(list, properties) {
    // YOUR CODE HERE
    
    var newArray = list.filter(function(Obj) {
        // The above runs a filter on the list using the value of Object
        for( var value in properties) {
            // runs a loop on each value of "properties" to check against
            // the if statement below
            if( properties[value] !== Obj[value])
                // checks to see if the value of properties does not match the 
                // value of the object being searched for, if it does not match, 
                // it will return false, removing it from the array.
            return false
        }
        return true
    })    
    return(newArray)

}

// tests
// ---
var plays = [
    {title: "Cymbeline", author: "Shakespeare", year: 1623},
    {title: "The Tempest", author: "Shakespeare", year: 1623},
    {title: "Hamlet", author: "Shakespeare", year: 1603},
    {title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600},
    {title: "Macbeth", author: "Shakespeare", year: 1620},
    {title: "Death of a Salesman", author: "Arthur Miller", year: 1949},
    {title: "Two Blind Mice", author: "Samuel and Bella Spewack", year: 1949}
]

var sh8spr = where(plays, {author: "Shakespeare"})
console.assert(sh8spr instanceof Array)
console.assert(sh8spr.length === 5)
console.assert(sh8spr[0].title === "Cymbeline")

sh8spr = where(plays, {author: "Shakespeare", year: 1611})
console.assert(sh8spr.length === 0)

sh8spr = where(plays, {author: "Shakespeare", year: 1623})
console.assert(sh8spr.length === 2)

var midcentury = where(plays, {year: 1949})
console.assert(midcentury.length === 2)
