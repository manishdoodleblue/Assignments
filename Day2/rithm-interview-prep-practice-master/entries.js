let objA = { a: 1, b: 2, c: 3 };


function entries(obj) {
  return Object.keys(obj).map(function(key) {
    return [key, obj[key]];
  });
}

console.log(entries(objA));