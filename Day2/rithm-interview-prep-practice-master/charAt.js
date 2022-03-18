
function charAt(str, idx) {
   
    return idx < str.length ? str[idx] : '';
}
console.log(charAt('awesome', 2))// 'e'
console.log(charAt('awesome', 12))// ''