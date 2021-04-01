/*In scenarios where we might want different promises to execute at the same time
rather than having a chain of reactions; we can introduce Promise.all() and pass
in a array of our promisses. */

const yt = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('getting details from youtube');
        resolve({videos: [1, 2, 3, 4]});
    }, 2000);
});

const fb = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('getting details from facebook');
        resolve({user: [5, 6, 7, 8]});
    }, 2000);
});

Promise.all([yt, fb])
 .then((result) => {
     console.log(result)
 });

 /*Please note that Promise.all() will execute once both asunchronous results are back
 This might cause delays in scenarios where one promise is faster that the other one */