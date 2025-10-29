class CustomNode {
    constructor(public value: number, public next: CustomNode | null) {}
}

function middleOfLinkedList(head) {
    let slow = head,
        fast = head;

    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}
