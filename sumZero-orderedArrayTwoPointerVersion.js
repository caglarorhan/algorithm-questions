function sumZero(arr){
// unordered array version
    let arrL = arr.length;
    if(arrL<2) return undefined;
    let lesser = 0;
    let bigger = arrL-1;
    while(lesser<bigger){
        //console.log(arr[lesser],arr[bigger])
        let sum = arr[lesser]+arr[bigger];
       if(sum===0){
           return [arr[lesser],arr[bigger]];
       }else{
           if(sum>0){
               bigger--;
           }else{
               lesser++;
           }
       }
   }
    return undefined;
}



console.log(sumZero([-5,-3,-1,0,2,5,26]));
console.log(sumZero([-5,-3,-1,0,3,45,246,343,444,844]));
console.log(sumZero([]));

