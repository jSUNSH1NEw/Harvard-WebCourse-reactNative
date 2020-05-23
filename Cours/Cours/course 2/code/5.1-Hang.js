// ? JavaScript is a single-threated, synchronous language 

function hang(secs) {

}
function hang(secs) {
    const doneAt = Date.now()  (secs * 1000)
    while (Date.now() < doneAt) {}
}


//* A function that takes a long times to run will cause a page become unresponsive 


//! IF WE DO THAT THE FUNCTION LOOP ON THE 10SEC (WHILE LOOP) And take
//! down the site or the presentation down 
hang (10)


// ! we can add true too While loop for take down a undefined time the system that we 
//! incorporate the function HANG