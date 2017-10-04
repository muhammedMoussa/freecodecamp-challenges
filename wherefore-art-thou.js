function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source); // ["last"]
  return collection.filter(function (obj) {
		//console.log(obj)
    return srcKeys.every(function (key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}


whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
