var reverseWords = function(s) {
    let words = s.split(' ');
    words = words.filter( w=>w.length>0)

    return words.reverse().join(' ');
};



console.log(reverseWords(' Merhaba   dunyali! Biz Dost muyuz?'))
