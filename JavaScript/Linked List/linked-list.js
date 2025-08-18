class Node{
    constructor(value){
        this.prev = null;
        this.value = value;
        this.next = null;
    };
}

export class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;

    }
    push(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return this.value;
    }

    pop() {
        if (!this.tail) return null;

        const nodeToPop = this.tail;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.size--;
        return nodeToPop.value;
    }

    shift() {
        if (!this.head) return null;

        const nodeToShift = this.head;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = nodeToShift.next;
            this.head.prev = null;
        }

        this.size--;
        return nodeToShift.value;
    }
    unshift(value) {
        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;

    }

    delete(value) {
        if (!this.head) return false;

        let current = this.head;

        while (current) {
        if (current.value === value) {
            if (current === this.head) {
            this.shift();
            }
            else if (current === this.tail) {
            this.pop();
            }
            else {
            const prevNode = current.prev;
            const nextNode = current.next;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
            this.size--;
            }

            return true; 
        }

        current = current.next;
        }

        return false;
    }

    count() {
        return this.size;
    }
}
