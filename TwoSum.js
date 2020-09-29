//https://leetcode.com/problems/two-sum/submissions/
twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++){
        if(nums.slice(i + 1).includes(target - nums[i])){
            return [i, nums.slice(i + 1).indexOf(target - nums[i]) + 1 + i]
        }
    }
};