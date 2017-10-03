function mutation(arr) {
	var low1 = arr[0].toLowerCase();
	var low2 = arr[1].toLowerCase();
	for (i=0;i<low2.length;i++) {
    if (low1.indexOf(low2[i]) === -1)
      return false;
    }
//   console.log(low1);
//   console.log(low2);
    return true;
}

mutation(["Hello", "hey"]);

