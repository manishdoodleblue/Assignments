function stringLastIndexOf(str, letter){
     
    let result = -1
    const strSplitted = str.split('');
    strSplitted.forEach((strLetter, index) => {
        if (strLetter === letter) result = index;
    });
    return result;
}
console.log(stringLastIndexOf('awesome', 'e'));