// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// A method on the browser to turn any object into a string representation.
// opposite of JSON parse();

var stringifyJSON = function(obj) {
 if (Array.isArray(obj)) { // is the obj an array ?
 	var results = []; // declare an empty array
 	for (var i = 0; i < obj.length; i++) { // loop through the array
 		results.push(stringifyJSON(obj[i])); // push the array value through the stringify method to pass a stringified version to the results array
 	}
 	return '['+results.join(',')+']'; // join all values separated by comma and concatenate string quotes around the array to convert to a string
 }
 if (obj && typeof obj === 'object') {
 	var results = [];
    
    for (var key in obj) {
    	if ( obj[key] === undefined || typeof(obj[key]) === 'function' ) {
    		continue;
    	}
    	results.push(stringifyJSON(key)+':'+stringifyJSON(obj[key]) );
    }
 	return '{'+results.join(',')+'}';
 }
 if ( typeof obj === 'string' ) { // if obj is a string concatenate it with string literals
 	return '"'+obj+'"';
 }
 return ''+obj; // if a number, null or boolean, use type coercion to convert to a string
};
