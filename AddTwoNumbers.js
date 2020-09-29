// https://leetcode.com/problems/add-two-numbers/submissions/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
addTwoNumbers = (l1, l2) => {
    console.log("l1", l1)
    console.log("l2", l2)
    return addTwoNumbersBetter(l1, l2, 0)
};

addTwoNumbersBetter = (l1, l2, carry) => {
    let val1 = l1.val ? l1.val : 0
    let val2 = l2.val ? l2.val : 0
    let next1 = l1.next || null
    let next2 = l2.next || null
    if(next1 || next2){
        if(val1 + val2 + carry > 9){
            return new ListNode(
                ((val1 + val2 + carry) % 10), 
                addTwoNumbersBetter(next1, next2, 1)
            )
        } else {
            return new ListNode(
                (val1 + val2 + carry), 
                addTwoNumbersBetter(next1, next2, 0)
            )
        }
    } else {
        if(val1 + val2 + carry > 9){
            return new ListNode(
                ((val1 + val2 + carry) % 10), 
                new ListNode(1)
            )
        } else {
            return new ListNode(
                (val1 + val2 + carry)
            )   
        }
    }
}