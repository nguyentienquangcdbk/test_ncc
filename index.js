// function resole(){
//     return new Promise(resolve =>{
//         setTimeout(() =>{
//             resolve('resolve');
//         },2000)
//     })
// }

// async function asyncall(){
//     console.log('calling');
//     var reslut = await  resole();
//     console.log(reslut);
// }

// asyncall();
// console.log('has');

const arr1 = [1, 3, 4, 2, 7, 9, 10, 6, 8];
const arr2 = [1, 3, 9, 11, 5, 7, 13];

const containNumber = arr1.filter((x) => x.includes(arr2));

console.log(containNumber);
