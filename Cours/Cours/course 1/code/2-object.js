const o = new Object()
o.firstName = "joffrey"
o.lastName ='weertz'
isLearning = true
o.greet = function () {
    console.log('hi')
}

const o2 = {}
o.firstName = 'Joffrey'
o['lastName'] = 'weertz'
const key = "isLearning"
o[key] = true
o['greet'] = function() {
    console.log ('hi !')    
}

const o3 =  {
    firstName = 'Joffrey',
    lastName = 'Weertz',
    isLearning: true,
    greet: function() {
        console.log('hi!')
    },
    address : {
        street : "main St",
        number: 123,
    },
}