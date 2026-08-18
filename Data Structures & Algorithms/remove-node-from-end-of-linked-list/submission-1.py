# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode(0)
        dummy.next = head

        slow, fast = dummy, dummy

        for _ in range(n):
            fast =  fast.next
        # moving both untill it reaches end
        while fast.next:
            slow = slow.next
            fast = fast.next

        # now removing the nth node
        slow.next = slow.next.next

        return dummy.next