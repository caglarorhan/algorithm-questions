var arrayPairSum = function(nums) {

nums.sort((a,b) => b-a);
let i=0;
let sum=0;

while(i<nums.length){
    console.log(`i:${i}  ve cift ${nums[i]}, ${nums[i+1]} min olan deger: ${nums[i+1]}`)
    sum = sum+ nums[i+1];
    i=i+2;
}

    return sum;


};


console.log(arrayPairSum([1,3,4,2]));
