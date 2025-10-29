var CustomNode = /** @class */ (function () {
    function CustomNode(value, next) {
        this.value = value;
        this.next = next;
    }
    return CustomNode;
}());
function middleOfLinkedList(head) {
    var slow = head, fast = head;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}
