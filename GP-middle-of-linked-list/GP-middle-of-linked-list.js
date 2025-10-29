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
// Create linked list: 1 -> 2 -> 3 -> 4 -> 5
var head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
console.log("Middle Node: ".concat(find_middle_of_linked_list(head).value));
head.next.next.next.next.next = new Node(6);
console.log("Middle Node: ".concat(find_middle_of_linked_list(head).value));
head.next.next.next.next.next.next = new Node(7);
console.log("Middle Node: ".concat(find_middle_of_linked_list(head).value));
