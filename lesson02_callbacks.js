//Let's emulate a real life scenario. We have a function that retrieves a users email
//In this case setTimeout is emulating the time elapsed until we fetch that information from
//our db for example

console.log('Start'); //1.This line runs first

function loginUser( email, password){ //2.loginUSer is added to the callstack and moved to web apis until resolved
    setTimeout(() =>{
        return {userEmail: email}; //6. At last after 1,5 seconds we are back
    }, 1500);
}

const user = loginUser('example@outlook.com', 1234); //3.This line come next
console.log(user); //4.Prints undefined - Simply the line above hasn't retrived the userEmail back in time

console.log('End'); //5.This line executes next


//To resolve this we can simply pass callback function. By default a callback function is a function that is going 
//to get resolved later. As such we can pass that within our original function

console.log('Start'); //1.This line runs first

function loginUser( email, password, callback){ //3.This adds loginUser to the callstack and then to the web apis
    setTimeout(() =>{
        console.log('Now we have the data');
        //Now instead of returning, we introduce a callback
        callback( {userEmail: email}); //6. At last after 1,5 seconds we are back
    }, 5000);
}

//In using the function expression for example we can now define the callback
const user = loginUser('example@outlook.com', 1234, (user) =>{
    console.log(user);
}); //2.Then we introduce a function expression

console.log('End'); //4.Our code continue to this lines while setTimeout is waiting to be resolved


/*We can actually further indent callbacks into other callbacks however this can very easily get out of hand*/

console.log('Start'); //1.This line runs first

function loginUser( email, password, callback){ //3.This adds loginUser to the callstack and then to the web apis
    setTimeout(() =>{
        console.log('Now we have the data');
        //Now instead of returning, we introduce a callback
        callback( {userEmail: email}); //6. At last after 1,5 seconds we are back
    }, 5000);
}

function getUserEmails(email, callback){
    setTimeout(()=>{
        callback(['urgent', 'urgent', 'medium']);
    }, 1000);
}

function emailDetails( emails, callback){
    setTimeout(()=>{
        callback('title of the video')
    } ,2000);
}


const user = loginUser('example@outlook.com', 1234, (user) =>{
    console.log(user);

    getUserEmails(user.emailEmail, (allEmails)=>{
        console.log(allEmails);
        emailDetails(allEmails[0], (title)=>{
            console.log(title);
        });
    })
}); 


console.log('End'); 

/*Please note: not all callback functions are of asynchronous type*/