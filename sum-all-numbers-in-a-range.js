
function sumAll(arr) {
  var tpof = arr instanceof Array;
  if(tpof === true){
    var el1 = arr[0];
    var el2 = arr[1];
    var min = Math.min(el1, el2);
    var max = Math.max(el1, el2);
    //console.log('Min: ', min);
    //console.log('Max: ', max);
    if(min == max){
      return 'Equal!';
    } else if(min != max){
      var init = 0;
      for(i=min; i<=max; i++){
        init += i;
        //console.log(i, init);
      }
      return('Sum: ', init);
    }
  } else {
    return('Not an Array!');
  }
}

sumAll([1, 4]);
