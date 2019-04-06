function capitalizeFirstChar(arr){
    //console.log(`Giristeki arr:${arr}`);
    if(arr[0].slice(0,1)==arr[0].slice(0,1).toUpperCase()){
        return arr;
    }else{
        let firstString=arr.shift();
        let capFirstLetter = firstString.slice(0,1).toUpperCase();
        let restOfString = firstString.slice(1,firstString.length);
        //console.log(capFirstLetter, restOfString)
        let newString = capFirstLetter + restOfString;
        arr.push(newString);
        //console.log(`Cikistaki arr:${arr}`);
        return capitalizeFirstChar(arr);
    }
}


console.log(capitalizeFirstChar(['plane','car','motorbike']))
console.log(capitalizeFirstChar(['apple','banana','strawbery']))
