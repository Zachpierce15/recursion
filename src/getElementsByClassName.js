// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

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











