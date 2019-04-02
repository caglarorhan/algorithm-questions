function same(arr1,arr2){

    let obj1 = {};
    let obj2 = {};
    for(let el of arr1){ // create frequency objects
        obj1[el**2] = ++obj1[el**2] || 1;
    }

    for(let el2 of arr2){ // create frequency objects
        obj2[el2]= ++obj2[el2] || 1;
    }
    //console.log(obj1, obj2); // check the objects
        return (arr1.reduce((cumul,item) => {return !!(cumul && obj1[item**2]===obj2[item**2])},true))

}





console.log(same([1,2,3],[4,1,9,5]));
console.log(same([1,2,3],[1,9]));
console.log(same([1,2,3],[4,1,4]));
