class LinkedList{
    constructor(){
        this.head = null,
        this.tail = null,
        this.length = 0
    }
    size(){
        return this.length
    }
}
//element is an object with a value and next property
class Node{
    constructor(value){
        this.value = value,
        this.next = null
    }
}

module.exports = LinkedList;