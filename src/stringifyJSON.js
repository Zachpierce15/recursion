// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === "number" || typeof obj === "boolean" || obj === null){
  	return isNumOrBoolean(obj);
  } else if(typeof obj === "string") {
  	return changeStringJSON(obj);
  } else if (Array.isArray(obj)){
  	return changeArrayJSON(obj);
  }else if (typeof obj === "object") {
  	return objectJSON(obj);
  }
};

var isNumOrBoolean = function (obj) {
	if (typeof obj === "number" || typeof obj === "boolean"){
		return obj.toString();
	} else if( obj === null) {
		return 'null'
	}
}
 var changeStringJSON = function (obj) {
 	var split = obj.split('')
 	split.unshift('"');
 	split.push('"')
 	return split.join('')
 }
var changeArrayJSON = function(obj) {
	if (obj.length === 0) {
		return '[]'
	} 
	else {
		for (var i = 0; i < obj.length; i++) {
			if (typeof obj[i] === "string") {
				obj[i] = changeStringJSON(obj[i]);
				
			}
			else if (Array.isArray(obj[i]) === true) {
				obj[i] = changeArrayJSON(obj[i]);
			}
			 else if (typeof obj[i] === "object"){
               obj[i] = objectJSON(obj[i])
			}
			
		}
	}
	return '[' + obj + ']'

}
var objectJSON = function(obj) {
	var objString = '';
	 var key = Object.keys(obj);
	 var value = Object.values(obj);

	if (Object.keys(obj).length === 0) {
		return '{}';
	} 
     for (var i = 0; i < key.length; i++){
  			var currKey = key[i]
        if (typeof value[i] === "function" || typeof value[i] === "undefined"){
        	return '{}'
        }
    	if (typeof value[i] === "boolean" || typeof value[i] === "number" || value[i] === null){
     		 objString += `"${currKey}":${value[i]},`
    	} 
    	else if (typeof value[i] === "object" && Array.isArray(value[i]) !== true && Object.keys(value[i]).length === 0){
               objString += `"${currKey}":` + objectJSON(value[i])+ ','
    	}
    	else if (typeof value[i] === "object" && Array.isArray(value[i]) !== true){
    		objString += `"${currKey}":` + objectJSON(value[i])+ '}'
    	}
    	else if (Array.isArray(value[i])){
    		for (var j = 0; j < value[i].length; j++){
    			value[i][j] = '"'+ value[i][j] + '"'
    		}
           objString += `"${currKey}":[${value[i]}],`
    	}
    	else {
  			 objString += `"${currKey}":"${value[i]}",`
	} 
}
   objString = objString.split('');
   objString.pop('')
   objString = objString.join('')
	return '{' + objString + '}'

}