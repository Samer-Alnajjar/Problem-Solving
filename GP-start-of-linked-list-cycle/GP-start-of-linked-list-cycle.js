var CustomNode = /** @class */ (function () {
    function CustomNode(value, next) {
        this.value = value;
        this.next = next;
    }
    return CustomNode;
}());
function has_cycle(head) {
    var fast = head, slow = head, cycleLength = 0;
    while (fast != null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            cycleLength = findCycleLength(slow);
            break;
        }
    }
    return findFirst(head, cycleLength);
}
function findCycleLength(slow) {
    var current = slow, length = 0;
    while (true) {
        current = current.next;
        length++;
        if (current == slow) {
            break;
        }
    }
    return length;
}
function findFirst(head, cycleLength) {
    var pointer1 = head, pointer2 = head;
    while (cycleLength > 0) {
        pointer2 = pointer2.next;
        cycleLength--;
    }
    while (pointer1 !== pointer2) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }
    return pointer1;
}
