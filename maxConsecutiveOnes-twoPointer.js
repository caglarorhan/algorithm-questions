var findMaxConsecutiveOnes = function(nums) {
    let maxi=0;
    let j=-1;

    for(let i=0; i<nums.length;i++){
        if(nums[i]===1){
            maxi = Math.max(maxi, (i-j));
            console.log(`Maksi degisti: ${maxi}`)
        }else{
            j=i;
        }

    }
    return maxi;
};

console.log(findMaxConsecutiveOnes([1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0]))
