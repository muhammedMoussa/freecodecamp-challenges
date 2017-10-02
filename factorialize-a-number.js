
function factorialize(number) {
  //var number = prompt('Enter number you want get factorial')
  var fact = 1;  
  for(var j=1; j<=number; j++){
    fact = fact*j;
  }
  //alert(fact);
  return fact;
}

factorialize(5);

