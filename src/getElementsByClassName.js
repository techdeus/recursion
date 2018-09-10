// The getElementsByClassName() method returns a collection of all elements 
// in the document with the specified class name, as a NodeList object.  
// The NodeList object represents a collection of nodes. The nodes can be 
// accessed by index numbers. The index starts at 0.
// Tip: You can use the length property of the NodeList object to determine 
// the number of elements with a specified class name, then you can loop through 
// all elements and extract the info you want.

// You should use document.body, element.childNodes, and element.classList

// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // input: a string name
  // output: an array of Nodelist objects that match the specified name
  // constraints: Use a recursive function to test ALL nodes and there child nodes to entirely traverse the DOM and check for the className
  // edge-cases: if no matches, return empty array

  var docBody = document.body; // store the root body node in an variable
  var classNodes = []; // declare a empty array to store the nodes with the class name
  
  function checkNode(node) {
  	if (node.classList && node.classList.contains(className)) {
  		classNodes.push(node);
  	}
  	node.childNodes.forEach(function(child) {
  		checkNode(child);
  	});
  }
  checkNode(docBody);
  return classNodes;
};
