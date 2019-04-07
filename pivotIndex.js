/*
Given an array of integers nums, write a method that returns the "pivot" index of this array.

We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.

If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.

Example 1:

Input:
nums = [1, 7, 3, 6, 5, 6]
Output: 3
Explanation:
The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.
Also, 3 is the first index where this occurs.


Example 2:

Input:
nums = [1, 2, 3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.


Note:

The length of nums will be in the range [0, 10000].
Each element nums[i] will be an integer in the range [-1000, 1000].
* */
let pivotIndex = function(nums) {

    let leftSum = 0;
    let totalSum = nums.reduce((cumul, val)=>{ return cumul+val},0);

    for(let x= 0 ; x<nums.length; x++){
        console.log(`Leftsum: ${leftSum} ve sag taraf: ${totalSum-(nums[x]+leftSum)}`)
        if(leftSum===(totalSum-(nums[x]+leftSum))){ return x}
        leftSum+=nums[x];

    }
    return -1;
};

let nums1 = [1, 7, 3, 6, 5, 6,11];
let nums2= [-1,-1,-1,0,1,1];
let nums3 = [-1,-1,1,1,0,0];
let nums4 = [-1,-1,0,1,0,-1];
console.log(pivotIndex(nums1));//4
console.log(pivotIndex(nums2));//0
console.log(pivotIndex(nums3));//4
console.log(pivotIndex(nums4));//4
