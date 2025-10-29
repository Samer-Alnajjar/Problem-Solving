class CustomNode {
    constructor(public value: number,public next: CustomNode | null = null) {
        this.value = value;
        this.next = next;
    }
}

function has_cycle(head: any) {
    let fast = head,
        slow = head;

    while(fast != null && fast.next != null) {
        fast  = fast.next.next;
        slow = slow.next;

        if(fast === slow) return true;
    }

    return false;
}

const head = new CustomNode(1);
head.next = new CustomNode(2);
head.next.next = new CustomNode(3);
head.next.next.next = new CustomNode(4);
head.next.next.next.next = new CustomNode(5);
head.next.next.next.next.next = new CustomNode(6);

console.log(`LinkedList has cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

// To find the count of a cyclic linkedList

function has_cycle(head: any) {
    let fast = head,
        slow = head;

    while(fast != null && fast.next != null) {
        fast  = fast.next.next;
        slow = slow.next;

        if(fast === slow) return true;
    }

    return false;
}
