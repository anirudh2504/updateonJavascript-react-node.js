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



const calAge=function (dateOfBirth)
{
    return 2025-dateOfBirth;
}


const person=[2002,2005,2010,2015];
console.log(calAge(person[1]));