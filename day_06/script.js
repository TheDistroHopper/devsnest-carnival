console.log("\nQuestion 1");
function is_array(a) {
  return Array.isArray(a);
}
console.log(is_array("w3resource"));
console.log(is_array([1, 2, 4, 0]));

console.log("\nQuestion 2");
function array_Clone(a) {
  let arrayCopy = [];
  if (Array.isArray(a)) {
    a.forEach((i) => {
      arrayCopy.push(array_Clone(i));
    });
  } else return a;
  return arrayCopy;
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

console.log("\nQuestion 3");
function first(a, n) {
  if (!n) return a[0];
  else if (n < 0) return [];
  return a.slice(0, n);
}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

console.log("\nQuestion 4");
function joinstring(a, separator) {
  return a.join(separator);
}
myColor = ["Red", "Green", "White", "Black"];
console.log(joinstring(myColor));
console.log(joinstring(myColor, ","));
console.log(joinstring(myColor, "+"));

console.log("\nQuestion 5");
function mostOccuring(a) {
  let mp = {};
  let maxf = 0;
  let maxele;
  a.forEach((i) => {
    if (!mp[i]) mp[i] = 1;
    else mp[i]++;
    if (maxf < mp[i]) {
      maxf = mp[i];
      maxele = i;
    }
  });
  return maxele;
}
console.log(mostOccuring([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));
