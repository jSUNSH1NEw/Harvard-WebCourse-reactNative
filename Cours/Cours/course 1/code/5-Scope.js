// ? -------------Variale lifetime 

// *Lexical scoping (var); 
// *from when they'r declared UNTIL 
// *When their functon ends 

// *Block scoppin (const, let ); until the next is reached 

//  ! the difference between cont and let 
// *?Const is somethink cant be updated

thisIsHoisted()

thisIsNotHoisted()

const obj = {}

obj = {} // *  Dont working aint change the constant 

obj.a = 'abc' // * will be right way we have mutated l'object but the reference is 
                 // * not changed 


                 //////////////////
                    COURSES
                 //////////////////

let ThisIsALet = 51 

let ThisIsALEt = 51 // ! errorr we have already a Let variable whit the
                    // ! same propreties HE GIVEU US SOME PROTECT


////////////////////////////////////////
var  ThisIsAVar = 50

var ThisIsAvar = 52

ThisIsAvar = 'new value'


// ? ------------------ HOISTED

function thisIsHoisted(){
    console.log('this is a funtion declared at the bottom of the file')
        // *  we call it a Hoisted Function
}


const thisIsNotHoisted(){
    console.log('this is a funtion declared at the bottom of the file')
        // ! Will not working cause its a constante
}

let thisIsNotHoisted(){
    console.log('this is a funtion declared at the bottom of the file')
        // ! Will not working cause 'ThisIsNotHoisted is not define
}

var thisIsNotHoisted(){
    console.log('this is a funtion declared at the bottom of the file')
        // ! Will not working cause 'ThisIsNotHoisted is not a function'
}



// * HOW WE TAKE ADVANTAGE OF THE SCOP 

// ! GOOD FOR ORGANISATION  
// ! u declare the function a the bottom of the code 


