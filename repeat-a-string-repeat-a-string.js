
function repeatStringNumTimes(str, num) {
    var res = '';
    for(var i=0; i<num; i++){
        res+=str;
    }
  return res;
}

repeatStringNumTimes("*", 8);
