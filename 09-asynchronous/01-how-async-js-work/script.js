//How Async JavaScript Works

//JavaScript is synchronous by default, it is single threated, run single each operation, line by line

// https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/37192676#overview

//example for the setTimeout(), it takes callback function, that callback gets registered and gets put on 'Task Queue' or 'Event Queue', a queue is a data structure just like a stack. The flow for the stack is like 'last in, first out'
// a Queue is 'first thing put on is the first thing out' like cycling

//the register Callback get put on the task queuse

//example for the fetch(), the fetch API is an example of an API that uses promisees over callback
//the difference is, the promise does not put on the 'Task queue', instead they got put on the 'Microtask queue' or 'PromiseJobs' that give higher priority

//Changes
