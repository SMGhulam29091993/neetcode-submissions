# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if not list1 and not list2:
            return None

        if not list1:
            return list2
        if not list2:
            return list1

        curr_1 = list1
        curr_2 = list2

        node_head = None

        if curr_1.val < curr_2.val:
            node_head = curr_1
            curr_1 = curr_1.next
        else:
            node_head = curr_2
            curr_2 = curr_2.next
        curr_head = node_head

        while curr_1 and curr_2:
            if curr_1.val < curr_2.val:
                node_head.next = curr_1
                curr_1 = curr_1.next
            else:
                node_head.next = curr_2
                curr_2 = curr_2.next
            node_head = node_head.next
        while curr_1:
            node_head.next = curr_1
            curr_1 = curr_1.next
            node_head = node_head.next

        while curr_2:
            node_head.next = curr_2
            curr_2 = curr_2.next
            node_head = node_head.next

        return curr_head
