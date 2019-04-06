function someRecursive(arr, callBack){
    //console.log(`Ilk karakter ${arr[0]} ve Geri kalan : ${arr.slice(1)} peki ilk karakter odd mu: ${callBack(arr[0])}`);

    if(arr.length>1 ){
        return someRecursive(arr.slice(1), callBack) || callBack(arr[0])
    }else{
        //console.log(`dizide eleman kalmadi`)
        return false;
    }

}


function isOdd(n){
    //console.log(`Gelen sayi ${n} tek sayi midir: ${n%2!==0}`)
    return n%2!==0;
}
console.log(someRecursive([2,4,6,8,9,10], isOdd));
console.log(someRecursive([2,4,6,8,10], isOdd));
