class LinkedList{
    constructor(){
        this.head = null,
        this.tail = null,
        this.length = 0
    }
    size(){
        return this.length
    }
    indexOf(value){
        let currentNode = this.head;
        let index = -1;
        while(currentNode){
            index++;
            if(currentNode.value === value){
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1;
        }
}

//element is an object with a value and next property
class Node{
    constructor(value){
        this.value = value,
        this.next = null
    }
    
}



