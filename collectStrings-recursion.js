function collectStrings(obj){
    let strArr = [];
    Object.values(obj).forEach(item => {
        //console.log(`Her bir item:${item}`)
        if(typeof item ==='object'){
            strArr = strArr.concat(collectStrings(item));
        }else if(typeof item==='string'){
           strArr.push(item);
        }
    })
return strArr;
}


const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])
