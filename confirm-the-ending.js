function confirmEnding(str, target) {
return (str.lastIndexOf(target) === str.length - target.length) ? true : false;
}

confirmEnding("Bastians", "n");

