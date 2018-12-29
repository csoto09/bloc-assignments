class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.unshift(item);
    return this.queue;
  }

  dequeue() {
    return this.queue.pop();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

const todo = new Queue();
todo.enqueue('hello');
console.log(todo.queue);
