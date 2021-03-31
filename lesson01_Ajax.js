/*What is AJAX? It stands for Asynchronous javascript and XML and is a way for javscript
to cope with complex scenarios. At it's core, javascript is a single thread language, meaning
it can only do one operaition at a time. This translates to 1 line of code at a time*/

/*However, some lines of code cannot be executed until further details or actions have been fulfilled first
For example, we can fetch data from our database but we cannot display them until we have all the data back from
our db. Instead of our code stalling, js simply moves to the next lines and comes back once everything is ready*/

//Let's compare how synchronouns and asynchronous code work

//Synchronous code - Let's create a function and call the function inbetween two synchronous lines of code
function exampleFunction(){
    console.log('We are withing this function callstack now'); //3.Now that we are in the exampleFunction callstack, this line executes next
    console.log('This code executes'); //4. Exectures next - exampleFunction is finished and popped off the callstack
}

console.log('Start'); //1.This line executes first

exampleFunction(); //2.Then exampleFunction was invoked and a new queue was added in the callstack

console.log('End'); //5.Now we are back to the main() execution stack and this line executes last



//Asynchronous code - Now we instead are invoking a setTimeout function which by natura is an async function


console.log('Start'); //1. This line executes first

setTimeout(() =>{ console.log('We are in the timeout'); }, 2000); //2. Then setTimeout is invoked //4. After 2s we come back and the console.log is executed

console.log('End'); //3. This line executes second

//Web apis is in the browser and keeps track of those things for us. setTimeout gets popped out of callstack to web apis 
//And comes back once the return is ready

//event listeners
//set Timeout
//set Interval
//All these are passed on to the web apis