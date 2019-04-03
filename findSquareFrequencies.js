function same(arr1,arr2){
if(arr1.length!==arr2.length) return false;
    let obj1 = {};
    let obj2 = {};
    for(let i=0; i<arr1.length; i++){ // create frequency objects
        obj1[arr1[i]**2] = ++obj1[arr1[i]**2] || 1;
        obj2[arr2[i]]= ++obj2[arr2[i]] || 1;
    }
    //console.log(obj1, obj2); // check the objects
        return (arr1.reduce((cumul,item) => {return !!(cumul && obj1[item**2]===obj2[item**2])},true))
}





console.log(same([1,2,3],[4,1,9]));
console.log(same([1,2,3],[1,9]));
console.log(same([1,2,3],[4,1,4]));
