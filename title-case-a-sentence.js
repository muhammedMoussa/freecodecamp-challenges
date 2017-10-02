
n titleCase(str) {
  var arr = str.toLowerCase().split(' ');
  //console.log(arr)
  var res = arr.map(function(el){
      return el.replace(el.charAt(0), el.charAt(0).toUpperCase());
  });
  var final = res.join(" ");
  //console.log(final)
  return final;
}

titleCase("I'm a little tea pot");
