// var removeDuplicates = function(nums) {
//     let prev = -Infinity;
//     let icerdekiSonTekilSinirIndeksi = 0;
//     let temp = nums[nums.length-1]; // son item tempe alindi
//     for(let x=0; x<nums.length-1; x++){
// if(icerdekiSonTekilSinirIndeksi+x+1===nums.length) return icerdekiSonTekilSinirIndeksi+1;
//         let last = nums[x];
//         if(prev===last){
//             nums[nums.length-(x+1)]=nums[x]
//             nums[x] = temp;
//             temp = nums[nums.length-(x+2)]
//             icerdekiSonTekilSinirIndeksi = x;
//         }
//         prev = last;
//         console.log(`${nums} x:${x}  ve iSTSI: ${icerdekiSonTekilSinirIndeksi}`);
//     }
//     return icerdekiSonTekilSinirIndeksi+1
// };


// var removeDuplicates = function(nums) {
//     let prev = -Infinity;
//     let icerdekiSonTekilSinirIndeksi = 0;
//
//     for(let x=0; x<nums.length-1; x++){
//         if(icerdekiSonTekilSinirIndeksi+x+1===nums.length) return icerdekiSonTekilSinirIndeksi+1;
//         let current = nums[x];
//         let next = nums[x+1];
//
//         if(current===next){
//             let temp = nums[x+2];
//             nums[x+2]=next;
//             nums[x+1] = temp;
//
//             icerdekiSonTekilSinirIndeksi = x;
//         }
//         prev = current;
//         console.log(`${nums} x:${x}  ve iSTSI: ${icerdekiSonTekilSinirIndeksi}`);
//     }
//     return icerdekiSonTekilSinirIndeksi+1
// };


var removeDuplicates = function(nums) {
    console.log(nums.join(','))
    let mySet = new Set(nums.join(','));
    return mySet.size;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
