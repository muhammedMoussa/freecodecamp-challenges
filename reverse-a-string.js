
function reverseString(str) {
  var arr = [];
  var newStr = '';
  for(i=0; i < str.length; i++){
    arr.push(str[i]);
  }
  arr = arr.reverse();
  //console.log(arr);
  for(var i in arr){
    //console.log(newStr+=arr[i]);
    newStr+=arr[i];
  }
  console.log(newStr);
  return newStr;
}

reverseString("muhammed");

