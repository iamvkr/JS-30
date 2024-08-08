// Day 17: Data Structures
// Tasks/Activities:
// Activity 1: Linked List

// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
/** l1[10,next]==> l2[20,next]==>l3[30,] */
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next
    }
}
const l3 = new Node(30)
const l2 = new Node(20, l3)
const l1 = new Node(10, l2)

// console.log(l1);

/** output:
Node {
  value: 10,
  next: Node { 
    value: 20, next: Node { 
        value: 30, next: null 
        } 
    }
}
 */

// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    addNode(data) {
        // create a new node:
        const node = new Node(data);
        if (this.head == null) { //check if linked list is empty:
            this.head = node;
            this.tail = node;
        } else {
            // if already some node exist, attach this new node to that last node 'next' field:
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    displayNodes() {
        let head = this.head;
        while (head !== null) {
            console.log(head.value);
            head = head.next
        }
    }

    deleteNode() {
        // if linkedlist is empty:
        if (this.head == null) {
            return "cannot delete from empty list";
        }
        if (this.length == 1 || (this.head == this.tail)) {
            // reset linkedlist:
            this.head = null;
            this.tail = null;
        } else {
            // remove last node:
            let current = this.head;
            while (current.next !== this.tail) {
                current = current.next
            }
            // when head.next == this.tail loop stops
            // now just unlink its next:
            current.next = null;
            // set last tail node to current node:
            this.tail = current
        }
    }
}

const lList = new LinkedList();
lList.addNode(11);
lList.addNode(12);
lList.addNode(13);
console.log("nodes Items:");
lList.displayNodes();
lList.deleteNode()
console.log("nodes Items:");
lList.displayNodes();

// console.log(lList);
/* output:
{
    "head": {
        "value": 11,
            "next": {
            "value": 12,
                "next": {
                "value": 13,
                    "next": null
            }
        }
    },
    "tail": {
        "value": 13,
            "next": null
    },
    "length": 3
}
*/
