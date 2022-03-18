function countValues(hello,num){
    count = 0;
    for(i in hello){
      if(hello[i] == num){
        count++;
      }
    }
    return count
}


console.log(countValues([4,1,4,2,3,4,4], 4)) // 