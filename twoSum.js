var twoSum = function(numbers, target) {
    //brute force solution
    // for(let i=0; i<numbers.length-1; i++){
    //     for(let j = i+1; j<numbers.length; j++){
    //         if(numbers[i]+numbers[j]===target){
    //             return [i+1,j+1];
    //         }
    //     }
    // }
// return by 1 based index !!!!
let obj ={};
    for(let x=0; x<numbers.length; x++){
        //console.log(`Sira: ${x} siradaki sayi: ${numbers[x]} bu sayinin targetten kalani: ${target-numbers[x]}` );

        if(obj[numbers[x]]!==undefined && obj[numbers[x]]!==null){
          return [obj[numbers[x]]+1, x+1 ]
        }else{
            obj[target-numbers[x]] = x; // farklar
        }
    }

//return obj
        };


console.log(twoSum([2,7,11,15],9));
