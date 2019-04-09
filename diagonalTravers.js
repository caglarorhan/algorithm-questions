function diagonalTravers(matrix){
    if(matrix.length===0) return [];
    let res= [];
    let x = matrix[0].length;
    let y = matrix.length;
    //-------------------------------------
    if(x===1){
        for(let k = 0; k<y ; k++){
            res.push(matrix[k]);
        }
        return res;
    }
    //--------------------------------------

    for(let i= 0; i<y; i++){ //matrix pumpin

        for (let j=0; j<i; j++){
            matrix[i].unshift(null);
        }
        for(let k=x-i; k>1;k--){
            matrix[i].push(null);
        }
    }

    console.log(matrix);
    let convertor = true;
    for(let n=0; n<(x+y)-1; n++){
            convertor=!convertor;
            let m;
            if(convertor){
                m=0
                while(m<y){
                    if(matrix[m][n]!==null && matrix[m][n]!==undefined){res.push((matrix[m][n]));}
                    m++
                }
            }else{
                m=y-1;
                while(m>=0){
                    if(matrix[m][n]!==null && matrix[m][n]!==undefined){res.push((matrix[m][n]));}
                    m--;
                }
            }

        }



    return res;
}

console.log(diagonalTravers([[2,3,4],[5,6,7],[8,9,10],[11,12,13],[14,15,16]]))

/*
[
    [ 7, null ],
    [ null, 9 ],
    [ null, null, 6 ] ]
* */



// "C:\Program Files\nodejs\node.exe" C:\xampp\htdocs\algorithm-questions\diagonalTravers.js
// [
//     [ 1      , 2     , 3     , 7     , 9, 3, 5, null, null, null, null, null, null ],
//     [ null   , 4     , 5     , 6     , 4, 5, 6, 2, null, null, null, null, null ],
//     [ null   , null  , 7     , 8     , 9, 4, 5, 6, 3, null, null, null, null ],
//     [ null   , null  , null  , 7     , 8, 9, 4, 5, 6, 3, null, null, null ],
//     [ null   , null  , null  , null  , 7, 8, 9, 4, 5, 6, 3, null, null ]
//     ]
//
// console.log(diagonalTravers([[3],[2]]))

// console.log(diagonalTravers(
//     [
//             [1,2,3],
//             [4,5,6],
//             [7,8,9]
//             ]));
//
// /*
// [ [ 1   , 2,     3,  null,   null ],
//   [ null, 4,     5,  6,       null ],
//   [ null, null,  7,  8,       9 ]
//   ]
// * */
//
// console.log(diagonalTravers([
//     [ 1, 2, 3, 7, 9, 3, 5 ],
//     [ 4, 5, 6, 4, 5, 6, 2 ],
//     [ 7, 8, 9, 4, 5, 6, 3 ],
//     [ 7, 8, 9, 4, 5, 6, 3 ],
//     [ 7, 8, 9, 4, 5, 6, 3 ]
// ]));

/*
    [ 1, 2, 3, 7, 9, 3, 5 ],
    [  , 4, 5, 6, 4, 5, 6, 2 ],
    [  ,  , 7, 8, 9, 4, 5, 6, 3 ],
    [  ,  ,  , 7, 8, 9, 4, 5, 6, 3 ],
    [  ,  ,  ,  , 7, 8, 9, 4, 5, 6, 3 ]
*/
