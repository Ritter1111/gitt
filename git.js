'use strict';
// const options ={
//     name:'test',
//     width:1024,
//     height:1024,
//     colors:{
//         border:'black',
//         bg:'red'
//     }
// };
// //console.log(option ['colors']['border']);
// //delete option.name;
// //console.log(option); 
// for(let key in options){
//     if(typeof(options[key])==='object '){
//         for(let i in options[key]){
//             console.log(`свойство ${i} имеет значение ${options[key][i]}`)
//         }
//     }else{
//         console.log(`свойство ${key} имеет значение ${options[key]}`)
//     }
    
// }


let salaries = {
    'john':100,
    'pete':300,
    'mary':250
};
 
function count(obj){
    return Object.keys(obj).length
}
console.log( count(salaries))

// let sumSalaries = Object.fromEntries(
//     Object.entries(salaries).map(([key, value])=>[key, value+=value])
// );

// alert(sumSalaries(salaries) );
