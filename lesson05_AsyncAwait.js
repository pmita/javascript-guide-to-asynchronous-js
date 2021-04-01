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


/*Another great feature of asynchronous javascript is the fact that we can instead use
it in a synchronous fashion. We can do this with async-await. To be 100% async-await
doesn't turn our asynchronous code into synchronous. It's more of a syntatic sugar for us
the developers, to better understand how our code works under the hood */

async function displayUser(){
    //Rather than chaining our code we can use function expressions with await keyword in front
    const currentUser = await loginUser('example@outlook.com', 1234); //keyword await keeps track of every function
    const emails = await getUserEmails(currentUser.userEmail); //and we can move to the next line once the results are back
    const emailDetails = await emailDetails(emails[0]); //ensure you include the async keyword in front of the function
    console.log(emailDetails);
}
