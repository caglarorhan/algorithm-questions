function spiralOrder(matrix) {
let res = [];
if(matrix.length===0){return res;}
if(matrix[0].length===1) { res = res.concat(...matrix); return res;}
let x= matrix[0].length;
let y= matrix.length;
let totalCount = x*y;

// Dongu baslat
    while(res.length<totalCount){
        if(matrix.length===1){res = res.concat(matrix[0]); return res;}

                // ustu kes res e at
        if(res.length<totalCount){
            res = res.concat(matrix.shift());
        }
        if(res.length<totalCount) {
            // en sag sutunu kes res e at
            for (let i = 0; i < matrix.length; i++) {
                res.push(matrix[i].pop());
            }
        }

        if(res.length<totalCount) {
            // en alti kes tersten res e at
            res = res.concat(matrix.pop().reverse());
        }

        if(res.length<totalCount) {
            // en sol sutunu tersten kes rese at
            for (let j = matrix.length - 1; j >= 0; j--) {
                res.push(matrix[j].shift());
            }
        }
        // dondur
    }

return res;
};

console.log(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12],
    [13,14,15,16]
]))
// console.log(spiralOrder([
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]))
console.log(spiralOrder([
    [2,3,4],
    [5,6,7],
    [8,9,10],
    [11,12,13],
    [14,15,16]
]))
