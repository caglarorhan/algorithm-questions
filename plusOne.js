/*
* Plus One
  Go to Discuss
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
* */

let plusOne = function(digits) {
    if(digits.length===0) return [];
    let last = digits.pop();
    if(last==9){
        if(!digits.length) return [1,0];
        return plusOne(digits).concat(0);
    }else{
        return digits.concat(parseInt(last)+1);
    }

};


console.log(plusOne([4,3,2,1]));
console.log(plusOne([9]));
console.log(plusOne([9,0,3,5,1,0,1]));
console.log(plusOne([8,7,6,5,4,3,2,1,9]));
console.log(plusOne([1,2,3,4,5,6,7,8,9]));
console.log(plusOne([8,9,9,9,9,9,9,9,9]));
