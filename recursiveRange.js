function recursiveRange(n){
    if(n===0) return n;
    return n + recursiveRange(n-1);
}


console.log(recursiveRange(6));
console.log(recursiveRange(5));
console.log(recursiveRange(4));
