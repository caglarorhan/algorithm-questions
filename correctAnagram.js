const anagram = (str1, str2) => {
    if(str1.length!==str2.length) return false;
    const obj1 = {};
    const obj2 = {};
    for(let i = 0; i<str1.length; i++){
        obj1[str1[i]] = ++obj1[str1[i]] || 1;
        obj2[str2[i]] = ++obj2[str2[i]] || 1;
    }
    for(let key in obj1){
        //console.log(key)
        if(obj1[key]!==obj2[key]) return false;
    }
return true;
};


console.log(anagram('texttwisttime', 'timetwisttext'));
console.log(anagram('ey edip adanada pide ye', 'ey edip adanada pide ye'));
console.log(anagram('anagram', 'gramanaz'));
console.log(anagram('anagram', 'gramana'));
console.log(anagram('anagram', 'gramina'));
console.log(anagram('', ''));
