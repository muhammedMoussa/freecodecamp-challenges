function diffArray(arr1, arr2) {
  var newArr = [];
  var mixed = arr1.concat(arr2)
  var merged = arr1.concat(arr2)
  merged.filter(function(el){
    if(!arr1.includes(el)){
        console.log(el)
        newArr.push(el)
    } else if(!arr2.includes(el)){
      console.log(el)
      newArr.push(el)
    }
  })
  console.log(merged)
  console.log(newArr)
  return newArr;
}

diffArray([1, 2, 4, 3, 5], [1, 2, 7, 3, 5]);
