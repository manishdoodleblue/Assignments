
function countNumbers(hello) {
    count = 0;
    for(i in hello){
      if(hello[i] == parseFloat(hello[i])){
        count++;
      }
    }
    return count
}

console.log(countNumbers(['a','b','3','awesome','4']));