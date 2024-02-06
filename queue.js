var queues = {}

class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    };
    // Other methods
    enqueue(element) {
        let queueImput = element
        console.log(queueImput)
        this.items[this.count] = element
        this.count++;
    };
    // Other methods
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.count - this.lowestCount === 0;
    }
    // Other methods
    isEmpty() {
        return this.count - this.lowestCount === 0;
    }
}

function createQueue(){
    let queueName = document.getElementById('queue-name').value
    queues[queueName] = new Queue();  
    console.log(queues)
}

function isEmpty() {
    let queueName = document.getElementById('queue-input-is-empty').value
   let teste =  queues[queueName].peek()
   console.log(teste)
}

function inserir() {
    let queueName = document.getElementById('queue-input-enqueue').value
    let queueElement = document.getElementById('queue-input-element').value
    queues[queueName].enqueue(queueElement)
    console.log(queues)
}