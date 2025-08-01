// const getPromise=()=>
// {
//    return new Promise((resolve,reject)=>
//     {
//         console.log("i am promise")
//         resolve("completed successfully");
//        //reject("Failed");


//     });
// };


// let promise=getPromise();
// promise.then(()=>
//     {
//         console.log("Sussess");
//     })
//     promise.catch(()=>
//         {
//             console.log("Rejected");
//         })


function asyncFunction() 
{
    return new Promise((resolve,reject)=>
        {
            setTimeout(()=>      //this will fetch data after 5 sec
                {
                    console.log("some details ");
                    resolve("Success")
                },5000);
           
        });
}
console.log("Fetching data1 ")
let p1=asyncFunction();
p1.then((res)=>
    {
        console.log(res);
        let p2=asyncFunction();
p2.then((res)=>
    {
        console.log(res);
    });
    });
    
// p1.reject((res)=>
//     {

//     })    
