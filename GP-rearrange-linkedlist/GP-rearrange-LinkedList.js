var ListNode = /** @class */ (function () {
    function ListNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    ListNode.prototype.printList = function () {
        var temp = this;
        var result = [];
        while (temp != null) {
            result.push(temp.value);
        }
        console.log(result.join(' -> '));
    };
    return ListNode;
}());
function reverseLinkedList(head) {
    var prev = null;
    while (head != null) {
        var temp = head === null || head === void 0 ? void 0 : head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }
    return prev;
}
function rearrangeLinkedList(head) {
    var fast = head, slow = head;
    while (fast != null && fast.next !== null && slow != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    var secondHalfHead = reverseLinkedList(slow);
    var firstHalfHead = head;
    while (firstHalfHead !== null && secondHalfHead !== null) {
        var temp1 = firstHalfHead;
        firstHalfHead.next = secondHalfHead;
        firstHalfHead = temp1;
        var temp2 = secondHalfHead;
        secondHalfHead.next = firstHalfHead;
        secondHalfHead = temp2;
    }
    if (firstHalfHead != null) {
        firstHalfHead.next = null;
    }
}
