
//element is an object with a value and next property
class Node{
    constructor(value){
        this.value = value,
        this.next = null
    }
}
    
class LinkedList{
    constructor(){
        this.head = null,
        this.tail = null,
        this.length = 0
    }
    size(){
        return this.length
    }

    isEmpty(){
        return this.length === 0;
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

    elementAt(index){
        let currentNode = this.head;
        let count = 0;
        while(count < index){
            count++;
            currentNode = currentNode.next;
        }
        return currentNode.value;
    } 
}


    




