class CustomNode {
    constructor(public value: number, public next: CustomNode | null) {}
}

function has_cycle(head: any) {
    let fast = head,
        slow = head,
        cycleLength = 0;

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

function findCycleLength(slow: CustomNode) {
    let current = slow,
        length = 0;

    while (true) {
        current = current.next!;
        length++;
        if (current == slow) {
            break;
        }
    }

    return length;
}

function findFirst(head: CustomNode, cycleLength: number) {
    let pointer1 = head,
        pointer2 = head;

    while (cycleLength > 0) {
        pointer2 = pointer2.next!;
        cycleLength--;
    }

    while (pointer1 !== pointer2) {
        pointer1 = pointer1.next!;
        pointer2 = pointer2.next!;
    }

    return pointer1;
}
