function stringIndexOf(awesome, e) {
    for (let i = 0; i < awesome.length; i++) {
        if (awesome[i] == e) {
  
            return i;
        }
    }
    return -1;5 
  }
  
  console.log(stringIndexOf('awesome', 'e'))
  console.log(stringIndexOf('awesome', 'z'))