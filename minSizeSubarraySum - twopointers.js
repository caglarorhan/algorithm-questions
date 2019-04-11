var minSubArrayLen = function(s, nums) {
    if(nums.length===0) return 0;
    if(nums.length===1 && nums[0]<s) return 0;
    if(nums[0]>=s) return 1;
    if(nums[nums.length-1]>=s) return 1;

    let leftPoint=0;
    let rightPoint=0
    let cumul = nums[leftPoint];
    let minSize=+Infinity;
while(leftPoint<nums.length && rightPoint<nums.length){
        //console.log(`leftPoint: ${leftPoint} rightPoint: ${rightPoint}`)
        //console.log(`Cumul durum:${cumul}`)
    if(cumul>=s){
        //console.log(`Giris minsize: ${minSize} `);
        minSize = Math.min(minSize, rightPoint-leftPoint+1)
        //console.log(`Cikis minsize: ${minSize} `);
        cumul-=nums[leftPoint];
        leftPoint++;
    }else{
        rightPoint++;
        cumul+=nums[rightPoint]
    }

}
    return minSize==Infinity?0:minSize;
        };
//console.log(minSubArrayLen(11,[1,2,3,4,5]));
console.log(minSubArrayLen(7,[2,3,1,2,4,3]));
