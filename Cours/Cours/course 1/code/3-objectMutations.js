const o = {
    a: 'a',
    b: 'b',
    obj: {
        key: 'key',
    },
}

//* const o2 = o Autre facon de retouuver les valeur de o

const o2 = Object.assign({}. o)  // ! donne moi un nouvelle object et rentre les donné dans mon objet o

o.a = 'new value'


o2.obj.key = 'new value' 
console.log(o.obj.key)


// console.log(o2.a)

// * ou 

// console.log(o.a)

// * qui donnera le meme resultat 



// * how to  do a deep copy of my object

function deepCopy(obj) {
    // *check if values are obb 
    // * if so. copy that object (deep copy)
    // * else return the value
    const keys = Object.keys(obj)

    const newObject = {}

    for (let i = 0; i <keys.lenght; i++) {
        if (typeof obj[keys[i]] === 'object') {
          newObject[key] = deepCopy(obj[key])
        } 
        else {
            newObject[key] = obj[key]
        }
    }
    return newObject
}

const o3 = deepCopy

o.obj.key = 'new key!'
console.log (o3.obj.key)