function capitalizeWords (arr) {
    // add whatever parameters you deem necessary - good luck!

    if(arr[0].slice(0,1)===arr[0].slice(0,1).toUpperCase()){
        return arr;
    }

    let next = arr[0].toUpperCase();
    //console.log(next);
    arr.shift();
    arr.push(next);
    return capitalizeWords(arr);

}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
