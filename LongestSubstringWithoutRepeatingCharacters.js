// https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/
/**
 * @param {string} s
 * @return {number}
 */
lengthOfLongestSubstring = (string) => {
    let length = string.length
    let count = 0
    let best = []
    let duplicates = new Set()
    for (let i = 0; i < length; i++){
        if(duplicates.has(string[i])){
            best.push(count)
            count = 1
            i = 
        } else {
            duplicates.add(string[i])
            count++
        }
        best.push(count)
    }
    return best.reduce((max, num) => num > max ? num : max, 0)
};