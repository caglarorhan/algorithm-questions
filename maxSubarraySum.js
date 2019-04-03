// function maxSubarraySum(arr,num){
//     if(arr.length===0) return null;
//     if(arr.length===1 && arr[0]!==num) return null;
//     if(arr.length<num) return null;
//
//     let back=0;
//     let maxCount=-Infinity;
//     let count=0;
//
//     while(back<arr.length-num+1){
//         for(let x=0; x<num; x++){
//             count+=arr[back+x];
//         }
//         if(count>maxCount){
//             maxCount=count;
//         }
//         count=0;
//         //console.log(`MaxCount: ${maxCount}`)
//         back++;
//     }
//     return maxCount;
// }

function maxSubarraySum(arr,num){
    if(arr.length===0) return null;
    if(arr.length===1 && arr[0]!==num) return null;
    if(arr.length<num) return null;


    let maxCount;
    let count=0;
    for(let x=0; x<num; x++){
        count+=arr[x];
    }
    let back= 0;
    let front = back+num;
    maxCount = count;
    //console.log(`Ilk count: ${count}`)
    while(back<arr.length-num){

        //console.log(`${count}+${arr[front]}-${arr[back]}`);
        count += arr[front] - arr[back];
        if(count>maxCount) maxCount=count;
        back++;
        front++;
    }
    return maxCount;
}





console.log(maxSubarraySum([1,4,6,90,43,12,89,100],2));
 console.log(maxSubarraySum([1,2,5,2,8,1,5],4));
 console.log(maxSubarraySum([],4));
 console.log(maxSubarraySum([1,98],4));
