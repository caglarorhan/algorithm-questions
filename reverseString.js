// First version without recursion
// function reverseString(str){
//     let arrStr = str.split('');
//     return arrStr.reverse().join('');
// }

function reverseString(str){
    // add whatever parameters you deem necessary - good luck!
    if(str.length===0){return '';}
    return  reverseString(str.slice(1,(str.length))) + str.slice(0,1);
}

console.log(reverseString('Denemek guzeldir!'));

