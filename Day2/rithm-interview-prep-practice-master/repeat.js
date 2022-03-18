function repeat(string,times){
    var repeatedString = ''
    while(times>0){
        repeatedString += string;
        times--
    }
        return repeatedString;
    
}

let n =repeat('manish  chandruu ' ,5);
console.log(n)