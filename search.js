function search(arr,num){
    if(arr.length===0) return -1;

    let left=0;
    let right= arr.length-1;
    let target= Math.floor(right/2);

    while(left<right+1){
        if(arr[target]===num) return target;
        if(arr[target]<num){
            left=target+1;
        }else{
            right=target-1;
        }
        target = left + Math.floor((right-left)/2);
        //console.log(`new target:${target}, left: ${left}, right: ${right}`)
    }
    return -1;
}

console.log(search([1,2,3,4,5,6,7,8,9],6))
console.log(search([1,2,3,4,5,6,7,8,9],3))
console.log(search([1,2,3,4,5,6,7,8,9],9))
console.log(search([1,2,3,4,5,6,7,8,9],11))
