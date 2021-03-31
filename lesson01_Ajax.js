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

/*
Here is the natural flow of our code
CAllSTACK
 - - - - - -
| main();   |  
 - - - - - - 

 exampleFunction and a new execution context is added to the queue
 CALLSTACK
  - - - - - - - - - -
| exampleFunction(); |
  - - - - - - - - - - 
 - - - - - -
| main();   |
 - - - - - - 

 after all the code within exampleFunctio is executed then we are back to main callstack
CALLSTACK
  - - - - - -
| main();   |  
 - - - - - - 
*/


//But how is async code different? Let's have a look
//Asynchronous code - Now we instead are invoking a setTimeout function which by natura is an async function


console.log('Start'); //1. This line executes first
setTimeout(() =>{ console.log('We are in the timeout'); }, 2000); //2. Then setTimeout is invoked //4. After 2s we come back and the console.log is executed
console.log('End'); //3. This line executes second

/*
Here is the natural flow of our code
CAllSTACK
 - - - - - -
| main();   |  
 - - - - - - 

 once setTimeout is invoked, that is added to our callstack 
CALLSTACK
   - - - - - - - - - -
| exampleFunction(); |
  - - - - - - - - - - 
 - - - - - -
| main();   |
 - - - - - - 

 but since setTimeout is of async type, setTimeout is removed from the queue and added to what is called web apis. Web apis are a tool that browsers gives us access to
 essentially setTimeout is out of the callstack and will remain in the web apis until its ready the code is ready .. in this case its 2 seconds

 CALLSTACK               Web apis
 - - - - - -            - - - - - - 
| main();   |          | setTimeout |
 - - - - - -            - - - - - - 

 while setTimeout is 'trapped' in our web apis, the rest of our code continues. Now eveerything in our callstack has been executed! Once the 2 seconds are finished, setTimeout
 is returned to the callstack queue
 CALLSTACK              
 - - - - - - - - -            
| setTimeout();   |       
 - - - - - - - - -     
*/

//Some functionallity is by default of asynchronous type, such as setTimeout, setInterval, eventListeners, etc.