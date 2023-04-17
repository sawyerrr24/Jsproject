// //declaring variables
// //let age = 25
// //console.log(age)

// //const salary=50000
// //console.log(salary)


// //data types
// //const name="Vishwas"
// //const language="JavaScript"
// //const channel="Codevolution"

// //const total=0
// //const PI = 3.14

// //const isPrimaryNumber=true
// //const isNewUser=false

// let result
// console.log(result)


// const person={
//     firstName:'Bruce',
//     lastName:'Wayne',
//     age:30
// }

// console.log(person.firstName)



// //const evenNumbers=[2,4,6,8,10]
// //console.log(evenNumbers[0]) 


// //let i=12
// //console.log(++i)
// //console.log(--i)


// //console.log('4'-'2')
// //console.log('4'%'2')

// //type conversion
// //console.log(parseFloat('3.14'))


// //console.log(String(null)) 
// //or
// //console.log((500).toString())


// //Equality
// //const var1 =10
// //const var2='10'

// //console.log(var1==var2)
// //console.log(var1===var2)


// // const num=80
// // if(num>60){
// //    console.log('Number is positive')
// // }

// // else if(num<60){
// //     console.log('Number is not positive')
// // }
// // else{
// //     console.log('Number is zero')
// // }

// // const color=10

// //  switch('color'){
// //      case 'red':
// //          console.log('Color is red')
// //          break

// //             case 'blue':
// //         console.log('Color is blue')
// //           break

// //              case 'green':
// //     console.log('Color is green')
// //                  break
// //                 default:
// //                      console.log('Not a valid color')
// // }


// //  for loop
// //   for(let i = 1; i<=5; i++){
// //     console.log('Iteration number'+  i)
// //   }  

//  //while loop
// // let i=1
// // while(i<=5){
// //   console.log('Iteration number' +  i)
// //   i++
// // }

// // let i = 5
// // do{
// //   console.log('Iteration number' +  i)
// //   i++
// // }
// // while(i<=5)


// //for of loop
// // const numArray=[1,2,3,4,5]

// // for(const num of numArray){
// //   console.log('Iteration number' +  num)

// // }

//  //functions
// //  function greet(username){
// //    console.log('Good morning ' + username);
// //  }

// //  greet('Bruce')
// //  greet('Kofi')
// //  greet('Clark')

 
// function add(a,b){
//     return a + b 
// }

// const sum = add(25,10)
// console.log(sum);


// //arrow function
// const arrowSum=(a,b) =>{
//     return a+b
// }

// const arrowSum =(a,b) => a+b


// const tan = arrowSum(25,30)
// console.log(tan);


//scope
// block scope
// function scope
// Global scope

// const myNum=200
// const myName='Sam'

//block scope example
//let and const can only be accesssed in block they're declared in
if(true){
  const myName='Brian'
  console.log(myName);
 // console.log(myNum);
}


//function scope example
function test(){
  const myName='Batman'
  console.log(myName);
 // console.log(myNum);
}

test()

//global scope
//a global scoped variable is outside any block or function 
//it cannot overwrite block or function variables

