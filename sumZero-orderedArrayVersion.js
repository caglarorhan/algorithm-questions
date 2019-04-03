function sumZero(arr){
// unordered array version
    let arrL = arr.length;
    if(arrL<2) return undefined;
    for(let x=0; x<arrL-1; x++){
        for(let y=arrL-1; y>-1; y--){
            if(arr[x]+arr[y]===0 && x!==y){
                return ([arr[x],arr[y]]);
            }
        }

    }
    return undefined;
}



console.log(sumZero([-5,-3,-1,0,2,5,26]));
console.log(sumZero([-5,-3,-1,0,10,45,246,343,444,844]));
console.log(sumZero([]));

