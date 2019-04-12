var rotate = function(nums, k) {
//     for(let i=0; i<k;i++){
//         let last = nums.pop();
//     nums.unshift(last);
//     }

// second solution
    // let numLen = nums.length;
    // for(let i=0; i<k; i++){
    //     nums =[nums[numLen-i-1]].concat(nums)
    // }
    // nums.length = numLen;

// 3rd - hatali yontem -basarisiz deneme

// for(let x=0; x<k; x++){
//         for(let i=0; i<nums.length-x; i++){
//             let temp = nums[nums.length-1];
//             nums[nums.length-1] = nums[i+x];
//             nums[i+x] = temp;
//             console.log(nums);
//
//         }
//     console.log(`---------------------------`)
//
//     }
//4th
    for(let x=0; x<k; x++){
        for(let i=0; i<nums.length; i++){
            let temp = nums[nums.length-1];
            nums[nums.length-1] = nums[i];
            nums[i] = temp;
            //console.log(nums);

        }
        //console.log(`---------------------------`)

    }
// 5th -basarisiz deneme
//     if(k%nums.length===0) return nums;
//     k = k%nums.length;
//     let numsL = nums.length;
//     let temp;
//         for(let x=0; x<=k; x++){
//             console.log(`x:${x}`)
//             //ilk bastan k kadar elementi alip ayni sira ile sona eklersek numsL-k elementi basa eklemis gibi islem yapmis oluruz
//
//         }

    return nums;
};

console.log(rotate([1,2,3,4,5,6,7,8,9,10],3))
/*
1 2 3 4 5 6 7 temp [4] (5)
1 2 3 4 1 6 7  temp [4]u [0] a koy
5 2 3 4 1 6 7  temp [5]


4 5 6 7 1 2 3   k=4 ters=3
5 6 7 1 2 3 4   k=3 ters=4
3 4 5 6 7 1 2   k=2 ters=5
2 3 4 5 6 7 1   k=1 ters=6

--

* */
