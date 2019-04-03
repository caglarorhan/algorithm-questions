// function countUniqueValues(arr){
//     let mySet = new Set(arr);
//     return mySet.size;
//
// }

function countUniqueValues(arr) {
    if(arr.length===0) return 0;
    let count = 1;
    let back = 0;
    for (let front = 1; front < arr.length; front++) {
        if (arr[front] !== arr[back]) {
            back = front;
            count++;
            // console.log(`
            // Back: ${back}
            // Front: ${front}
            // Current: ${current}
            // Count: ${count}
            // `)
        }
    }
    return count;
}


console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 1, 2, 8, 9]));
console.log(countUniqueValues([-11, -10, -2, 3, 4, 8, 9]));
