const sayHello = (function makeHelloFunction() {
    var message = 'hello!'

    function sayHello() {
        console.log(message)
    }

    return sayHello
})()



const counter = (function() {
    let count = 0 

    return  {
        inc: function() { count = count +1 },
        get: function() { console.log(count) },
    }
})()

counter.get()
counter.inc()
counter.get()


// * La varaible count n'est pas sivible dans le scop global 
