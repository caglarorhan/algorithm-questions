function power(baseNumber, pwr){
    if(pwr==1) return baseNumber;
    return baseNumber * power(baseNumber, pwr-1);

}

console.log(power(-4,2))
