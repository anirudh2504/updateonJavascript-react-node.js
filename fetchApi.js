async function getdata() {
    let response=await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data= await response.json();
     console.log(response);
   console.log(data);
    
}
getdata();


const url="https://jsonplaceholder.typicode.com/posts";