//Promise is just an object that eiter brings back a result or a failure of an asynchronous operation
//We can create a promise with the promise constructor and then pass in two key words.
//Resolve which corresponds to a successful callback
//Reject which corresponds to a unsuccessful callbak

const promise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        console.log('got the user');
        resolve(new Error('user not logged in'));
    }, 2000)
});

//We then need to consume that promise
promise
 .then(user =>{ //.then will correspond to a successful result
    console.log(user);
    })
.catch(err => console.log(err)); //But we can also chain the .catch that corresponds to an unsuccessful result


/*LEt's re-do our previous example with promises instead of callbacks */

console.log('Start'); 

function loginUser( email, password){ 
    //We can instead pass in a new promise
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
                console.log('Now we have the data');
                resolve( {userEmail: email}); //Reject would emulate the unsuccessful callback scenario
        }, 5000);
    });
    
}

function getUserEmails(email){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(['urgent', 'urgent', 'medium']);
        }, 1000);
    });
    
}

function emailDetails( emails){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            callback('title of the video')
        } ,2000);
    });
}

/*Now we are ready to consume the promises. Since we have multiple promise, we can chain them
together. This is now much better than the callback hell we had to deal with previously*/
loginUser('example', 1234)
 .then((user) =>{
     getUserEmails(user.email)
 })
 .then((email) => {
     emailDetails(email[0])
 })
 .then((emailDetails) => {
     console.log(emailDetails)
});

console.log('End'); 
