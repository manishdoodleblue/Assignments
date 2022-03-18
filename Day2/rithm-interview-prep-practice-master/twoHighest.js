function twoHighest(arr) {
    let final = [null, null]
    arr.forEach(value => {
      // to update value of firstHighest
      if (value > final[0] && value <= final[1]) {
        final[0] = value
      }
      // when value is greater then secondHighest update firstHighest with value of secondHighest and set secondHighest to value
      else if (value > final[1]) {
        let temp = final[1]
        final[1] = value
        final[0] = temp
      }
    })
    return final
  }
  
  console.log(twoHighest([1, 2, 10, 8])); // [8, 10]
  console.log(twoHighest([6, 1, 9, 10, 4])); // [9,10]
  console.log(twoHighest([4, 25, 3, 20, 19, 5])); // [20,25]
  console.log(twoHighest([1,2,2])); // [2,2]