
function separate(arr){
    return []
            .concat(arr.filter(v => v === "cat"))
            .concat(arr.filter(v => v === "water"))
            .concat(arr.filter(v => v === "dog"))
  }
let i=separate(['dog','cat','water']);
console.log(i)