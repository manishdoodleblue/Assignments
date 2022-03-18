function lastIndexOf(arr, number) { 
    for(let i=arr.length-1; i>=0; i--) 
     if(arr[i] === number)  
     return i; 
    return -1; 
  } 
  console.log(lastIndexOf([1, 2, 3, 4], 2));