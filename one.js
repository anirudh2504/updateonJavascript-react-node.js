// const abc={
//     a:10,
//     b:20
// }
// const x=abc;
//  x["a"]=20;
//  console.log(abc);

// let l1=1;
// l5=10;

// const c1=2;
// var v1=5;
// var v1=11;
// for(var block=0;block<1;block++)
//     {
//         l4=10
//         console.log(v1);
//     }
//     console.log(l4);
//     console.log(block);

// let x=10;
// x+=5;

// console.log(x);
// function sum()
// {
//    let l2=1;
//    const c2=2;
//    var v2=20;
// let i=0;
//      for( i;i<2;i++){
//             console.log(i)
//         };
//        // console.log(i);
//         var i=10;
//         console.log(i);

//    console.log(l1);
// console.log(c1);
// console.log(v1);
// console.log(l2);
// console.log(c2);
// console.log(v2);
// }
// sum();
// console.log(i);

//  console.log(l1);
// console.log(c1);
// console.log(v1);
//console.log(l2);
//console.log(c2);
//console.log(v2);

// let x = 18;
// if (x > 18) {
//   console.log("Senior");
// } else if (x == 18) {
//   console.log("End Teenage");
// } else {
//   console.log("Teenage");
// }

// switch (true) {
//   case x>18:
//     console.log("Senior");
//     break;
//   case x===18:
//     console.log("End teenage");
//     break;
//   case x<18:
//     console.log("Teenage");
//     break;
// }

// let x=15;
// x>=18 ?console.log("Senior") : console.log("junior");

// function fruitJuice(apple,oranges)
// {
//     console.log(`Making Juice `);
//     const Juice=`of ${apple} apple and ${oranges} oranges`
//     return Juice;

// }
// const final=fruitJuice(3,0);
// console.log(final);

// let curYear=2025
// let retirementAge=75;
// const yearsTillRetirement=(dob)=>retirementAge-(curYear-dob);
// console.log(yearsTillRetirement(2003));

// const calAge=function (dateOfBirth)
// {
//     return 2025-dateOfBirth;
// }

// const person=[2002,2005,2010,2015];
// console.log(calAge(person[1]));

// const arr=[12,15,"Ani",23,"Pra",true]
//  console.log(arr.push(99));
// console.log(arr.pop());
// arr.unshift(22);
// arr.shift();
// console.log(arr.indexOf("Ani"));
// console.log(arr.includes(23));
// console.log(arr);
// console.log(typeof(arr))

// const jon =
// {
//     firstName : "jon",
//     lastName :"Singh",
//      1:"13",
//     age :23 ,

// }
// console.log(jon);
// console.log(jon.1)    =>Guives error
// console.log(jon["1"])

//when function used in object it is called method
// const jonas2=
// {
//     firstName : "jon2",
//     lastName :"Singh",
//     birthyear :2000,
//     age :30 ,

//     calcAge :function()
//     {
//         return 2025-this.birthyear;
//     }
// }
// console.log(jonas2.calcAge(jonas2.birthyear));
// console.log(jonas2.calcAge());

// for(i=5;i<10;i++){
//     console.log(i);
// }
// console.log(i);

// let c=0;
// while(c<=5)
//     {
//         console.log(c);
//         c++;
//     }
//     console.log(c);

// function calcAge(birthyear){
//    // console.log(firstName);
//     const age= 2025-birthyear;
//     function printAge()
//     {
//         console.log(`you are ${age} years old`)
//     }
//     printAge();
// }
// //calcAge(2000);      //gives error that firstNmae not defined
// const firstName="Jonas";
//calcAge(2000);

//variable hoistin

// console.log(x);=> canot acces before initiloization (TDZ)
//console.log(y);
//console.log(z);

// let x=10;
// var y=20;

// const z=20;

// console.log(x);
// console.log(y);
// console.log(z);
// var y=30;
// x=20;

// function hoisting
//console.log(sum(5,10));   //worked
//console.log(sum2(5,10));  //TDZ eror
// console.log(sumArrow(5,10));

// function sum(a,b){
//     return a+b;
// }

// const sum2=function (a,b)
// {
//   return a+b;
// }
// const sumArrow=(a,b)=>a+b;

// console.log(sum(5,10));    ..........All worked fine
// console.log(sum2(5,10));
//    console.log(sumArrow(5,10));

// console.log(this);
// const calAge=function(birthyear)
// {

//    console.log(2025-birthyear) ;
//    console.log(this);
// }
// calAge(2000)

// const jonas=
// {

//     year:2002,
//     calAge :function()
//              {
//         console.log(this);
//         isMillimum :function()
//         {
//             console.log(this);
//         };
//         return 2025-this.year
//               },

// }

// const matilda=
// {
//    year :2000,

// }
// matilda.calAge=jonas.calAge;
// // console.log(matilda);
// console.log(matilda.calAge());
// console.log(jonas.calAge());

// const jessics=
// {
//     firstName :"jessics",
//     lastName :"singh",
//     age : 23,
// };
// const marriedJessics=jessics;
// marriedJessics.lastName="abc";

// console.log(marriedJessics);
// jessics.age=25;
// console.log(jessics);

// const jessica=
// {
//     firstName:"jessi",
//     lastName:"SIngh",
//     age:23,
//     arr:[20,30,50]
// }
// const newJseeica={...jessica}  //for spread operator we all elemnets but if we have array than it just pass its reference
// newJseeica.age=99;
// console.log(jessica);
// console.log(newJseeica)

//shallow copy
// const newJseeica={...jessica}
// newJseeica.arr.push(200);
// newJseeica.arr.unshift(500);
// console.log(jessica);
// console.log(newJseeica)

//depp copy is using structuredclone
// const newJessica=structuredClone(jessica);

// newJessica.arr.push(200);
// newJessica.arr.unshift(500);
// console.log(jessica);
// console.log(newJessica)

// const abc=[[1,2,3],[55,66,77],[100,200,300]]
// const a=[12,34,45,67]
// const bcd=[...abc];

// bcd.push(a);
// console.log(abc);
// console.log(bcd);

// const restaurent=
// {
//     name:"Restaurent",
//     Dishes:["Pizza","Calozone","Garlic bread","Samosa"],
//     drinks :["coffee","Tea","cold drinks"]

// }

// const [Drink,mainCourse]=[restaurent.drinks[1],restaurent.Dishes[3]];

// console.log(mainCourse);
// console.log(Drink);

// const abc=
// {
//      a : {
//         aa:10,
//         ab:20,
//         ac:30
//      },
//      b:{
//         ba:11,
//         bb:12,
//         bc:13,
//      },
//      c:{
//         ca:99,
//         cb:88,
//         cc:77,
//      }
// }

// const{a:{ac:ad},c}=abc;
// console.log(ad,c);

// const note = {
//   id: 1,
//   title: 'My first note',
//   date: '01/01/1970',
// }
// const{id:newId,title,date}=note;
// console.log(newId)
// console.log(title)
// console.log(date)

//print key value pairs
// for(let[key,values] of Object.entries(note))
//     {
//       console.log(key,values)
//     }

// const note = {
//   id: 1,
//   title: 'My first note',
//   date: '01/01/1970',
// }
// for(let el of Object.keys(note))
//     {
//        console.log(el);
//     }
//     for(let el of Object.values(note))
//         {
//             console.log(el)
//         }

// for(let el of Object.entries(note))
//         {
//             console.log(el)
//         }

// const arr=[12,1,15,12,56,56,12];
// const abc=[...new Set(arr)];
// console.log(abc);

// const note = {
//   1: 10,
//   title: 'My first note',
//   date: '01/01/1970',
// }
// console.log(note[1])

// let a=20;

// let b=a;
// a=30;
// console.log(a)
// console.log(b);

// console.log(a===b)

// let ac={
//     age:21
// }
// let ad=ac;
// console.log(ac);
// console.log(ad);
// console.log(ac===ad);
// ac.age=31;
// console.log(ac);
// console.log(ad);
// console.log(ac===ad);

// const upper=function(str){
//     return str.toUpperCase();
// }
// const lower=function(str)
// {
//    return str.toLowerCase();
// }
// const transform=function(str,fn)
// {
//     console.log(`this is transformed string: ${fn(str)} `)
// }
// transform("Anirudh",upper)

// const ani=
// {
//     name:"Anirudh",
//     dateOfBirth:2002,
//     curYear:2025,
//     calAge:function(curYear,dateOfBirth)
//     {
//         console.log(this);
//         return this.curYear-this.dateOfBirth
//     },
// }

// const b=
// {
//     name:"ABc",
//     dateOfBirth:2000,
//     curYear:2015,
// }
// const age=ani.calAge;
// console.log(age.call(b));

// function update()
// {
//     let counter =0;
//     return function ()
//     {
//         counter ++;
//         return counter;
//     }
// }
// const add=update();
// console.log(add())
// console.log(add())
// console.log(add())
// const a={}
// const b=
// {
//   a:10,
// }
// console.log(typeof(0));
// console.log(typeof(1));
// console.log(typeof(""));
// console.log(typeof(null));
// console.log(typeof(undefined));
// console.log(typeof(Object));
// console.log(typeof(a));
// console.log(typeof(b));

                        //---------Async javaScript--------------------
// console.log("1")
// console.log("2")
// setTimeout(()=>console.log("Hello"),3000)       // time in milisecond

// console.log("3")

// function sum(a,b)               //function callback in synchronous way
// {
//   console.log(a+b);
// }
// function calculator(a,b,callbackSum)
// {
//       callbackSum=sum(a,b)
// }
// calculator(10,15,sum)
// calculator(10,15,(a,b)=>console.log(a+b))

// function hello()             //function callback in async way
// {
//   console.log("Hello")
// }
// setTimeout(hello,3000);


// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data:" + dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }
// // setTimeout(1, () => getData(2));
// //  getData(2);
// //  getData(3);
// getData(1,()=>{getData(2,()=>{getData(3)})});

//call back hell  or pyramid of doom
// getData(1,()=>{
//   getData(2,()=>{
//     getData(3)}
//   )}
// )





// function getData(dataId)
// {
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     console.log("data:"+dataId)
//     resolve("Success")
//   },2000);
//   })
  
// }
//promises in javaScript
// let promise=new Promise((resolve,reject)=>{
//   console.log("I am Promise")
//   resolve(123);
// })

//promise chaing to get same output from call bcak hell
// let p1=getData(1)
// p1.then((res)=>{
//   console.log(res)
//   getData(2).then((res)=>
//     {
//       console.log(res)
//     })
// });


//better way
// getData(1).then((res)=>getData(2)).then((res)=>console.log(res))




// const getPromise=()=>
//   {
//     return new Promise((resolve,reject)=>
//       {
//         console.log("I am Promise")
//          //resolve();
//         //reject();
//       }
//     )
//   }


//   let promise=getPromise();
// promise.then(()=>console.log("Success"))
// promise.catch(()=>console.log("error"))





//  function asyncGetData()
// {
//     return new Promise((resolve,reject)=>
//       {
//          setTimeout(()=>{
//           console.log("get Data 1")
//           resolve("Data 1 Success")
//          },3000);
//       })
// }

// function asyncGetData2()
// {
//     return new Promise((resolve,reject)=>
//       {
//          setTimeout(()=>{
//           console.log("get Data 2")
//           resolve("Data 2 success")
//          },3000);
//       })
// }
//here both data are fetching at same time 
// console.log("fetching data 1")
// let p1=asyncGetData();
// p1.then((res)=>console.log(res))



// console.log("fetching data 2")
// let p2=asyncGetData2();
// p2.then((res)=>console.log(res))



//if we want data one after other we use promise chaining

// console.log("fetching data 1")
// let p1=asyncGetData();
// p1.then((res)=>{
//   console.log(res);
//   console.log("fetching data 2");
//   let p2=asyncGetData2()
//   p2.then((res)=>
//     {
//       console.log(res)
//     })
// })

//async await

//  function getData(dataId)
// {
//     return new Promise((resolve,reject)=>
//       {
//          setTimeout(()=>{
//           console.log("get data:"+dataId)
//           resolve("Data 1 Success")
//          },3000);
//       })
// }
// async function getAllData() {
//   await getData(1);
//   await getData(2);
//   await getData(3);
  
// }
// getAllData();




//--------------------------------------------call back & call back hell------------------------
// function getData(dataId,nextData)
// {
//   setTimeout(()=>
//     {console.log("data fetched:"+dataId)
//       if(nextData)
//         {
//           nextData();
//         }

//   },2000)
// }
// getData(1)
//  getData(2)
//  getData(3)
// getData(1,()=>getData(2,()=>getData(3))) //call back hell






//------------------------------------------Promise & promise chaining ------------------------
// function byPromise(dataId)
// {
//   return new Promise((resolve,reject)=>
//     setTimeout(()=>
//     {
//       console.log("Data fetched: "+dataId)
//       resolve("success")
//     },3000
// )
//   )
// }
// byPromise(1).then((res)=>{
//   console.log(res);
//   byPromise(2).then((res)=>console.log(res))
// })                                            


//--------------------------------------Aysnc await------------------------------------------
// function getData(dataId)
// {
//   return new Promise((resolve,reject)=>
//     {
//       setTimeout(()=>{
//         console.log("Getting data"+dataId)
//       resolve("Success");
//       },3000)
//     })
// }
// async function getAllData()
// {
//   await getData(1);
//   await getData(2);
//   await getData(3);
// }
// getAllData();


// const url="xyz.com"

// const getdata=async ()=>
//   {
// let response=await fetch(url);
// console.log(response.status)
// let data=await response.json();
//   }






// for(var i=0;i<=10;i++)
//     {
//         setTimeout(()=>console.log(i),1000)
//     }


//     for(let i=0;i<=10;i++)
//     {
//         setTimeout(()=>console.log(i),3000)
//     }
   


