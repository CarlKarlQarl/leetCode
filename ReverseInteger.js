// https://leetcode.com/problems/reverse-integer/
/**
 * @param {number} x
 * @return {number}
 */
reverse = x => {
    let sign = x > 0 ? 1 : -1
    let flip = parseInt(Math.abs(x).toString().split("").reverse().join(""))
    if (Math.abs(flip * sign) > 2147483648){
        return 0;
    }
    return flip * sign
};