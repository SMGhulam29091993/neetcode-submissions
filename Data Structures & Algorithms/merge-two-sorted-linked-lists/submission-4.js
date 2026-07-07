/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (list1 === null && list2 === null) return null

        if (list1 === null) return list2

        if(list2 === null) return list1

        let nodeHead = null

        let curr1 = list1
        let curr2 = list2

        if(curr1.val < curr2.val){
            nodeHead = curr1
            curr1 = curr1.next
        }else{
            nodeHead = curr2
            curr2 = curr2.next
        }

        let currHead = nodeHead

        while (curr1 && curr2){
            if (curr1.val < curr2.val){
                nodeHead.next = curr1
                curr1 = curr1.next
            }else{
                nodeHead.next = curr2
                curr2 = curr2.next
            }
            nodeHead = nodeHead.next
        }

        while (curr1 !== null){
            nodeHead.next = curr1
            curr1 = curr1.next
            nodeHead = nodeHead.next
        }

        while(curr2 !== null){
            nodeHead.next = curr2
            curr2 = curr2.next
            nodeHead = nodeHead.next
        }
        return currHead
    }
}
