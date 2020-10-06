// https://leetcode.com/problems/zigzag-conversion/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
convert = (s, numRows) => {
    let strArray = s.split("")
    let rowsArray = []
    for(let i = 0; i < numRows; i++){
        rowsArray.push([])
    }
    while(strArray.length > 0){
        for(let i = 0; i < numRows; i++){
            rowsArray[i % numRows].push(strArray.shift())   
        }
        rowsArray[0].push("")
        rowsArray[1].push(strArray.shift())
        rowsArray[2].push("")
        
    }
    return rowsArray.flat().join("")
};