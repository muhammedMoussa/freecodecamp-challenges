
function findLongestWord(str) {
	var last = [];
	var arr = str.split(' ');
	
	for(i=0; i<arr.length; i++){
		//console.log(arr[i], arr[i].length)
		last.push(arr[i].length);
	}
	//console.log(last)
	var final = Math.max.apply(null, last);
	console.log(final);
	return final;
}

findLongestWord("Muhammed was here");

