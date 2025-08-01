const getPromise=()=>
{
   return new Promise((resolve,reject)=>
    {
        console.log("i am promise")
       // resolve("completed successfully");
       reject("Failed");


    });
};


let promise=getPromise();
promise.then(()=>
    {
        console.log("Sussess");
    })
    promise.catch(()=>
        {
            console.log("Rejected");
        })