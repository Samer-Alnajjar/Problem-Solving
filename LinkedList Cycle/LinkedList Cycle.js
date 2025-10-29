var CustomNode = /** @class */ (function () {
    function CustomNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
        this.value = value;
        this.next = next;
    }
    return CustomNode;
}());
function has_cycle(head) {
    var fast = head, slow = head;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow)
            return true;
    }
    return false;
}
var head = new CustomNode(1);
head.next = new CustomNode(2);
head.next.next = new CustomNode(3);
head.next.next.next = new CustomNode(4);
head.next.next.next.next = new CustomNode(5);
head.next.next.next.next.next = new CustomNode(6);
console.log("LinkedList has cycle: ".concat(has_cycle(head)));
head.next.next.next.next.next.next = head.next.next;
console.log("LinkedList has cycle: ".concat(has_cycle(head)));
head.next.next.next.next.next.next = head.next.next.next;
console.log("LinkedList has cycle: ".concat(has_cycle(head)));
