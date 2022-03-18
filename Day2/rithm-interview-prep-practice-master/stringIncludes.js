function stringIncludes(awesome, e){
    for(i=0;i<awesome.length;i++){
        if(awesome [i]===e)
        {
            return true
        }
    }
    return false
}
let a = stringIncludes('awesome', 'e')
console.log(a)