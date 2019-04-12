var reverseWords = function(s) {
    let words = s.split(' ');
    words = words.map(w => w.split('').reverse().join(''))
    return words.join(' ');
};


console.log(reverseWords('Dunya   tersine donse vazgecmem!'));
