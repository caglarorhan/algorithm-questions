function isSubSequence(str1, str2){

    let pozis = 0;
    for(let x=0; x<str1.length; x++){
        pozis = str2.indexOf(str1[x]);
        if(pozis==-1) return false;
        str2 = str2.slice(pozis+1); // yeni str2 olusturduk
//console.log(str2)
    }
    return true;
}



console.log(isSubSequence('hello','Good morning, helo world'));
console.log(isSubSequence('goose','Am I going to see you there?'));
console.log(isSubSequence('abab','abracadabra'));
console.log(isSubSequence('abab','abba'));

