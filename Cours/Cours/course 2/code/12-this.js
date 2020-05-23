const person = {
    name: 'thejw',
    greet: function() {console.log('hello, ' + this.name) },
}
person.greet()

const friends = {
    name: 'oliver',
}

friends.greet = person.greet

friends.greet()

const greet = person.greet.bind({name: 'this is a bound object'})
person.greet.call({name: 'this is a bound object'})
person.greet.apply({name: 'this is a bound object'})

greet()


//? Setting `this` manually 

//? ¤ bind(), call(), apply()