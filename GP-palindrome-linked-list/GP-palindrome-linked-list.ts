class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function palindromeLinkedList(head: ListNode | null): boolean {
    let slow = head,
        fast = head,
        isPalindrome = true;

    while (fast != null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let headSecondHalf = reverseLinkedList(slow);

    let p1 = head;
    let p2 = headSecondHalf;

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

function reverseLinkedList(head: ListNode | null): ListNode | null {
    let current = head;
    let prev = null;

    while (current !== null) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }

    return prev;
}
