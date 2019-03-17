// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


// var getElementsByClassName = function(className) {
//  var answer = []
//  // create an answer array
//   var listOfNodes = document.body.childNodes;
//   // console.log(listOfNodes)


//   //create a list of all the nodes inside the document
//   for (var i = 0; i < listOfNodes.length; i++) {
//     if (listOfNodes[i].classList === undefined) {
//     	continue
//     } else if (listOfNodes[i].classList.contains(className)){
//     	answer.push(listOfNodes[i])
//     }
//     if(listOfNodes[i].hasChildNodes()) {
//        recursive(listOfNodes[i])
//     }
//   }
//   console.log(answer)
// };




// var recursive = function(node) {

// 	 var nodeChildren = node.childNodes;
// 	 for (var i = 0; i < nodeChildren.length; i++) {
// 		if (nodeChildren[i].classList === undefined){
// 			continue
// 		} else if (nodeChildren[i].classList.contains(className)){
// 	  answer.push(nodeChildren[i])
// 		}
// 	 }
// }

var getElementsByClassName = function(className) {
	return recursiveGetElementsByClassName(document.body, className);
}

var recursiveGetElementsByClassName = function(parentNode, className) {
	let result = [];
	const listOfNodes = parentNode.childNodes;

	if (nodeHasClassName(parentNode, className)) {
		result.push(parentNode);
	}

	for (var i = 0; i < listOfNodes.length; i++) {
		const childNode = listOfNodes[i];
		const resultOfChildNodes = recursiveGetElementsByClassName(childNode, className);
		result = result.concat(resultOfChildNodes);
	}

	return result;
}

var nodeHasClassName = function(node, className) {
	const classes = node.classList;

	if (node.classList === undefined) {
		return false;
	} else {
		return node.classList.contains(className);
	}
}

// var chasesGetElementsByClassName = function(className) {
// 	let result = [];
// 	let nodesToCheck = [];

// 	nodesToCheck.push(document.body);

// 	while (nodesToCheck.length) {
// 		const nodeToCheck = nodesToCheck.shift();
// 		if (nodeHasClassNameIterative(nodeToCheck, className)) {
// 			result.push(nodeToCheck);
// 		}

// 		const nodeImmediateChildren = nodeToCheck.childNodes;
// 		for (let i = 0; i < nodeImmediateChildren.length; i++) {
// 			const child = nodeImmediateChildren[i];
// 			nodesToCheck.push(child);
// 		}
// 	}

// 	return result;
// }

// var nodeHasClassNameIterative = function(node, className) {
// 	const classes = node.classList;

// 	if (node.classList === undefined) {
// 		return false;
// 	} else {
// 		return node.classList.contains(className);
// 	}
// }










