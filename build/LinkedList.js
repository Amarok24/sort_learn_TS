class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
export class LinkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let iterator = this.head;
        while (iterator.next)
            iterator = iterator.next;
        iterator.next = newNode;
    }
    get length() {
        let counter = 1;
        let iterator;
        if (this.head === null)
            return 0;
        iterator = this.head;
        while (iterator.next) {
            counter++;
            iterator = iterator.next;
        }
        return counter;
    }
    at(index) {
        let counter = 0;
        let node = this.head;
        if (node === null) {
            throw new Error("Head of LinkedList is null.");
        }
        while (node !== null) {
            if (index === counter)
                return node;
            counter++;
            node = node.next;
        }
        throw new Error("Index out of bounds.");
    }
    compare(leftIndex, rightIndex) {
        if (this.head === null) {
            throw new Error("Head of LinkedList is null.");
        }
        return (this.at(leftIndex).data > this.at(rightIndex).data);
    }
    swap(leftIndex, rightIndex) {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        [leftNode.data, rightNode.data] = [rightNode.data, leftNode.data];
    }
    print() {
        let node = this.head;
        if (this.head === null)
            return;
        while (node !== null) {
            console.log(node.data);
            node = node.next;
        }
    }
}
//# sourceMappingURL=LinkedList.js.map