function sumZero(arr){
// unordered array version
    let arrL = arr.length;
    if(arrL<2) return undefined;
    for(let x=0; x<arrL-1; x++){
        for(let y=x+1; y<arrL; y++){
            if(arr[x]+arr[y]===0){
                return ([arr[x],arr[y]]);
            }
        }

    }
    return undefined;
}



console.log(sumZero([-5,-3,-1,0,10,45,26,3,4,8]));
console.log(sumZero([-5,-3,-1,0,10,45,26,33,4,8]));
console.log(sumZero([]));
console.log(sumZero([1,2,3,4,5,98]));
console.log(sumZero([-98,1,2,3,4,5,98]));
console.log(sumZero([-8,1,8,3,4,5,98]));
