var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
        this.next = null;
    }
    return ListNode;
}());
function palindromeLinkedList(head) {
    var slow = head, fast = head, isPalindrome = true;
    while (fast != null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    var headSecondHalf = reverseLinkedList(slow);
    var p1 = head;
    var p2 = headSecondHalf;
    while (p2 !== null) {
        if (p1.value !== p2.value) {
            isPalindrome = false;
            break;
        }
        p1 = p1.next;
        p2 = p2.next;
    }
    reverseLinkedList(headSecondHalf);
    return isPalindrome;
}
function reverseLinkedList(head) {
    var current = head;
    var prev = null;
    while (current !== null) {
        var temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    return prev;
}
