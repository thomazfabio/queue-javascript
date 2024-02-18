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
}

async function isEmpty() {
    let queueName = document.getElementById('queue-input-is-empty').value
    queues[queueName].peek()
    resultLog()
}

function inserir() {
    let queueName = document.getElementById('queue-input-enqueue').value
    let queueElement = document.getElementById('queue-input-element').value
    queues[queueName].enqueue(queueElement)
    console.log(queues)
}

function resultLog() {
    let paragrafo = document.getElementById('queue-name-result')
    paragrafo.innerHTML = JSON.stringify(queues)
}

function printQueue() {
    slotResult = document.getElementById('queue-result')
    let resultHtml = ''
    for (let nameQueue in queues) {
        console.log(nameQueue)
        console.log(queues[nameQueue].items)
        resultHtml += `<div class="container border mb-2"> <div class="row"> <div class="col-6"> <spam>Nome: ${nameQueue}  </spam> </div> 
        <div class="col-3"> <spam>Contador: ${queues[nameQueue].count}</spam> </div>
        <div class="col-3"> <span>Frente da fila: ${queues[nameQueue].lowestCount} </spam></div>
        </div>
        <div class="row">
        <div class="col-12"> <spam>Elementos: ${JSON.stringify(queues[nameQueue].items)} </spam> </div>
        </div>
        </div>`
    }

    slotResult.innerHTML = resultHtml
}