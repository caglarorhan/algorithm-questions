function productOfArray(n){
    if(n===1) return n;
    return n* productOfArray(n-1);
}


console.log(productOfArray(4));
console.log(productOfArray(5));
console.log(productOfArray(6));
