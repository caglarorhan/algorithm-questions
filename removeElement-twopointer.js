var removeElement = function(nums, val) {
    // for(let i = 0; i<nums.length; i++){
    //     let o = nums[i];
    //     if(o === val){
    //         let temp =nums.pop();
    //         //console.log(temp);
    //         nums[i] = temp;
    //         //console.log(nums)
    //         i=i-1;
    //     }
    //     //console.log(nums);
    // }
    // return nums;

    let j = 0;
    let nl = nums.length;
    while(j<nl){
        if(nums[j]===val){
            nums[j]=nums[nl-1];
            nl--;
        }else{
            j++;
        }
    }
return nums.slice(0,nl);
};
console.log(removeElement([3,2,1,2,3],3));
