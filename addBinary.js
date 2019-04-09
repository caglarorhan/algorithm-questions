var addBinary = function(a, b) {
    let sum=[];
    let uzun = a.length>b.length?a:b;
    let kisa = a.length>b.length?b:a;
    let artan=0;
    //console.log(`uzun: ${uzun} ve kisa: ${kisa}`);

    for(let i=0; i<uzun.length; i++){
            //console.log(`i : ${i} iken kisa da buna karsilik indekste: ${kisa[kisa.length-i-1]}`)
        if(kisa[kisa.length-i-1]){
            //console.log(`kisa da karsiligi var`);
            //console.log(`${parseInt(kisa[kisa.length-i-1]) + parseInt(uzun[uzun.length-i-1]) +artan}`)
            let digiSum = parseInt(kisa[kisa.length-i-1]) + parseInt(uzun[uzun.length-i-1]) +artan;
            if(digiSum===3){sum.unshift(1); artan=1;}
            if(digiSum==2){sum.unshift(0); artan=1;}
            if(digiSum===1){sum.unshift(1); artan=0;}
            if(digiSum===0){sum.unshift(0); artan=0;}
        }else{
            let digiSum = parseInt(uzun[uzun.length-i-1]) +artan;
            if(digiSum===3){sum.unshift(1); artan=1;}
            if(digiSum===2){sum.unshift(0); artan=1;}
            if(digiSum===1){sum.unshift(1); artan=0;}
            if(digiSum===0){sum.unshift(0); artan=0;}
        }

    }
    if(artan===1){sum.unshift(1)}
    return sum.join('').toString();
};

console.log(addBinary("1111","1111"));
//"11110"
