function myReplace(str, before, after) {
  var re = new RegExp(before,"gi");
  if(/[A-Z]/.test(before[0])){
    after = after.charAt(0).toUpperCase()+after.substring(1, after.length);
  }
  var  newStr =  str.replace(re,after);
	//console.log(newStr);
	return newStr;
}
myReplace("He is Sleeping on the couch", "Sleeping", "bitting");
