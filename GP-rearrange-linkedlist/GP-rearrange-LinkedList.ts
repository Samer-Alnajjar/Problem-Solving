class ListNode {
    value: Number;
    next: ListNode | null;

    constructor(value: number, next = null) {
        this.value = value;
        this.next = next;
    }

    printList() {
        let temp = this;
        let result = [];
        while (temp != null) {
            result.push(temp.value);
        }

        console.log(result.join(' -> '));
    }
}

function reverseLinkedList(head: ListNode | null) {
    let prev = null;
    while (head != null) {
        let temp = head?.next;
        head.next = prev;
        prev = head;
        head = temp;
    }
    return prev;
}

function rearrangeLinkedList(head: ListNode) {
    let fast: ListNode | null = head,
        slow: ListNode | null = head;

    while (fast != null && fast.next !== null && slow != null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    let secondHalfHead = reverseLinkedList(slow);
    let firstHalfHead = head;

    while (firstHalfHead !== null && secondHalfHead !== null) {
        let temp1 = firstHalfHead;
        firstHalfHead.next = secondHalfHead;
        firstHalfHead = temp1;

        let temp2 = secondHalfHead;
        secondHalfHead.next = firstHalfHead;
        secondHalfHead = temp2;
    }

    if (firstHalfHead != null) {
        firstHalfHead.next = null;
    }
}
