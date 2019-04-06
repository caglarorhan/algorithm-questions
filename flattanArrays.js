function flattenArrays(arr){

        var newArr = [];
        for(var i = 0; i < arr.length; i++){
            if(Array.isArray(arr[i])){
                newArr = newArr.concat(flattenArrays(arr[i]))
            } else {
                newArr.push(arr[i])
            }
        }
        return newArr;

}

console.log(flattenArrays([1,2,[6,7],9,[12,[100,200,[300,400]]]]));
// ES6
console.log([1,2,[6,7],9,[12,[100,200,[300,400]]]].flat(3));
