
function largestOfFour (arr) {
	var newArr = [];
	//let max
	arr.map(function(el) {
		//console.log(Math.max.apply(null, el))
		newArr.push(Math.max.apply(null, el));
	});
	//console.log(arr)
	
	//Largest of Largest
	//max = Math.max.apply(null, newArr)
	//console.log(newArr);
	return newArr;
}

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);

