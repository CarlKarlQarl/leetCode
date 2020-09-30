// https://leetcode.com/problems/median-of-two-sorted-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
findMedianSortedArrays = (nums1, nums2) => {
    let mergedArray = nums1.concat(nums2).sort((a, b) => a - b)
    let length = mergedArray.length
    return length % 2 == 1 
        ? mergedArray[Math.floor(length / 2)]   
        : (mergedArray[length / 2] + mergedArray[(length / 2) - 1]) / 2
};