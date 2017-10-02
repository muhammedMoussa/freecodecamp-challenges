
function palindrome(str) {
	var patt = /[\W_]/g;
	var clean = str.replace(patt, '');
	var lower = clean.toLowerCase();
	
	var leftSide = lower;
	//console.log(leftSide);
	var rightSide = str.replace(patt, '').toLowerCase().split('').reverse().join('');
	//console.log(rightSide);
	//console.log(leftSide == rightSide);
	return leftSide == rightSide;
}



palindrome("eyee");

