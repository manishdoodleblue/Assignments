function removeFromString(str, start, removeCount) {
    let arr = str.split('');
    arr.splice(start, removeCount);
    return arr.join('');
  }
  
  
  function removeFromString(str, start, removeCount) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
      if (i < start || i >= start + removeCount) {
        newStr += str[i];
      }
    }
    return newStr;
  }
  console.log(removeFromString('Elie', 0, 2) )
          console.log (removeFromString('Elie', 1,0 )) 
          console.log(removeFromString('Rithm School', 0, 6)) // 'School'
          console.log( removeFromString('Rithm School', 2, 6) )// 'RiSchool'
         console.log (removeFromString('Rithm School', 6, 0)) // 'Rithm '