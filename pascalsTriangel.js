let generate = function(numRows) {
    let res = [];

    // bir dizideki n. item onceki dizinin n-1 ve n toplami
    // ilk ve son item 1

    for(let x = 1; x<=numRows; x++){
        let tempArr = [];
        for(let y = 0; y<x; y++){
            if(y===0){
                tempArr.push(1);
            }else if(y===x-1){
                tempArr.push(1);
            } else{
                if(x!==1 || x!==2){
                    tempArr.push(res[res.length-1][y-1] + res[res.length-1][y])
                }
            }

        }
        //console.log(`Temp array: ${tempArr}`)
        res.push(tempArr);
    }

    return res;
};

console.log(generate(34));
/*
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
[1,5,10,10,5,1]
]
* */
