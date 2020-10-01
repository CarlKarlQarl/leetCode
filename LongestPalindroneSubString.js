//https://leetcode.com/problems/longest-palindromic-substring/submissions/
/**
 * @param {string} s
 * @return {string}
 */
longestPalindrome = string => {
    console.log(string)
    if(string.length < 2){
        return string
    }
    let array = string.split("")
    let length = string.length
    let long = []
    for(let i = 0; i < length; i++){
        let targetIndices = []
        array.forEach((char, index) => {
            if(char === array[i]){
                targetIndices.push(index)
            }
        })
        for(let j = 1; j < targetIndices.length; j++){
            let possiblePalindrone = array.slice(targetIndices[0], targetIndices[j] + 1)
            if(checkPalindrone(possiblePalindrone)){
                long.push([possiblePalindrone.length, possiblePalindrone])
            }
        }
    }
    console.log("long", long)
    if(long.length > 0){
        let longest = long.reduce((memo, arr) => {
            return arr[0] > memo[0] ? arr : memo
        }, [0, "lol"])
        return longest[1].join("")    
    } else {
        return string[0]
    }
    
};

checkPalindrone = possiblePalindrone => {
    for(let i = 0; i < Math.floor(possiblePalindrone.length / 2); i++){
        if(possiblePalindrone[i] != possiblePalindrone[possiblePalindrone.length - 1 - i]){
            return false
        }
    }
    return true
}