//Nested scope function
// let a = 10
// function outer(){
//     let b=20
//     function inner(){
//         let c = 30
//         console.log(a,b,c);
//     }
//     inner()

// }

// outer()


//Closure
// function outer(){
//     let counter=0
//     function inner(){
//         counter++
//         console.log(counter)

//     }
//     inner()
// }

// outer()
// outer()


//different variation
// function outer(){
//     let counter=10
//     function inner(){
//         counter++
//         console.log(counter)

//     }

//    return inner
// }

// const op=outer()
// op()
// op() 


//Currying
function sum(a,b,c){
    return a+b+c
}

// console.log(sum(2,3,5));

//sum(2,3,5)  sum(2)(3)(5)

function curry(fn){
    return function(a){
        return function(b){
            return function(c){
            return fn(a,b,c)
            }
        }
    }

}



const curriedSum=curry(sum)
console.log(curriedSum(2)(3)(5));  


// const add2= curriedSum(2)S
// const add3=add2(3)
// const add5=(add3(5))
// console.log(add5)


//this keyword
// function sayMyName(name){
//     console.log('My name is ${name}');
// }
// sayMyName('Walter White')
// sayMyName('Heisenberg')


//ways to determine
// 3implicit binding
// 2explicit binding
// 1new binding
// 4default binding   


//implicit binding
//  const person={
// name:'Kofi',
// sayMyName:function(){
//     console.log(`My name is ${this.name}`)
// },
//  }
 
//  person.sayMyName()


//  ///explicit binding
// //  globalThis.name='Batman'
//  function sayMyName(){
//     console.log(`My name is ${this.name}`)
// }


// sayMyName.call(person)


//new binding
// function Person(name){
//     this.name=name
// }

// const p1=new Person('Kofi')
// const p2=new Person('Vishwas')

// console.log(p1.name,p2.name);


//default binding
// sayMyName()

//prototype
function Person(fName,lName){
    this.firstName=fName
    this.lastName=lName
}

Person.prototype.getFullName=function(){
    return this.firstName+ ' ' + this.lastName
}

function SuperHero(fName,lName){
    Person.call(this,fName,lName)
    this.isSuperHero=true
}

SuperHero.prototype.fightCrime=function(){
    console.log('Fighting Crime');
}


SuperHero.prototype=Object.create(Person.prototype)

const batman=new SuperHero('Bruce','Wayne')
SuperHero.prototype.constructor= SuperHero
console.log(batman.getFullName());




//  const person1=new Person('Bruce','Wayne')
// const person2=new Person('Clark','Kent')



// console.log(person1.getFullName())
//  console.log(person2.getFullName())






//class
// class person{
//     constructor(fName,lName) {
//         this.firstName = fName
//         this.lastName = lName
//     }
//     sayMyName(){
//         return this.firstName+' '+ this.lastName
//     }
// }

// const classp1=new person('Spider','Man')
// console.log(classp1.sayMyName())

// class newSuperHero extends person{
//     constructor(fName,lName){
//     super(fName,lName)
//     this.isSuperHero=true
//     }
//     fightCrime(){
//         console.log('Fighting Crime');
//     }
// }
// const batman=new newSuperHero('Bruce','Wayne')
// console.log(batman.sayMyName())