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
            return true;
        }
        return this.count - this.lowestCount === 0;
    }
    // Other methods
    isEmpty() {
        return this.count - this.lowestCount === 0;
    }
}

function createQueue() {
    let queueName = document.getElementById('queue-name').value
    queues[queueName] = new Queue();
    console.log(queues)
    result()
}

async function isEmpty() {
    let queueName = document.getElementById('queue-input-is-empty').value
    let result =  queues[queueName].peek()
    document.getElementById('result').innerHTML = ""+result
}

function inserir() {
    let queueName = document.getElementById('queue-input-enqueue').value
    let queueElement = document.getElementById('queue-input-element').value
    queues[queueName].enqueue(queueElement)
    console.log(queues)
}

async function result() {
    let queueNameResult = document.getElementById('queue-name-result')
    queueNameResult = JSON.stringify(queues)
    queueNameResult.innerHTML = ""+queueNameResult
    console.log(queueNameResult)
}