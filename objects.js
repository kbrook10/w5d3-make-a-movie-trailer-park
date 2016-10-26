//10.26.2016 Lesson: Classical Programming

//()Task: Object Oriented Programming - Ways to make things
//<----------------Beginning of the Task---------------->
// This is literal syntax, we can add list of properties --> Great for Simple Data
var food = {
    edible: true
}
//This is chain syntax example
food.edible = true
var pizza = Object.create(food) // --> This allows us to CREATE NEW object as clone/ copy
pizza.edible = false
console.log(pizza)
console.log(food)

//This is the New objects (Not As Common)
var food = new Object()
food.edible = true
var tacos = Object.create(food) // --> This allows us to CREATE NEW object as clone/ copy

//This is the Constructor Function Approach --> Capitalize 'F' in food b/c this is constructor, similar to new `O`bject...We do not run directly...These are used to clone or copy (Powerful --And most common for Self-aware)
var Food = function(){ // --> This is more powerful than the Literal
    this.edible = true;
    this.totalEaten = 0;
    this.eat = function(){
        this.totalEaten++
        console.log('Now eating ' + this.type + ' ' + '1 of ' + this.totalEaten)
    };
}

//Clone Constructor Functions --> 'pizza' is an instance of the 'Food' constructor Function
var pizza1 = new Food()
pizza1.type = 'Taco Pizza'
console.log(pizza1)

var pizza2 = new Food()
pizza2.type = 'Margarita Pizza'
console.log(pizza2)

Food.prototype.calories = 1200 //--> Retroactively modify Food

//New way to create functions Objects with ES6
class Vehicle {
    constructor(make, model){
        this.make = make
        this.model = model
        this.year
        this.setYear = this.setYear.bind(this)  // --> We need this bind b/c we have the method setYear function...
    }
    setYear(year){  // --> Do this when we want to transform the data and keep DRY...***
        this.year = year
    }

    drive(speed){ //--> This creates the 'drive' function w/o having to type function
        console.log(`${make} ${model} is driving ${speed}mph.`)
    }
}

class Toyota extends Vehicle { //--> 'extends' means clone everything in master template, then add NEW STUFF...This copies the Vehicle object and creates a new object 'class' of Toyota
    constructor(model) { // -> Magical function part of class and runs when first making object...
        super('Toyota', model) // --> Calls to Vehicle template's constructor (e.g. parent constructor)...Pass any arguments that the parent constructor can take...
        console.log('Now making new Toyota')
    }
}

var $4Runner = new Toyota('4Runner')
// $4Runner.setYear(2006)
$4Runner.year = 2006
console.log($4Runner)

var prius = new Toyota('Prius')
prius.year = 2008
console.log(prius)
//<----------------------------------------------------->

//<----------------End of Task-------------------------->

//()Task: Class Assignment --> Creating and Cloning Objects
//<----------------Beginning of the Task---------------->
//<----------------------------------------------------->
class Person {
    constructor(height, name){
        this.height = height
        this.name = name
        this.city = 'Indianapolis'
    }
    // setCity(){
    //     this.city = "Indianapolis"
    // }
}
class Athlete extends Person{
    constructor(height, name, sport, team){
        super(height, name)
        this.sport = sport
        this.team = team
    }
}
class BaseballPlayer extends Athlete{
    constructor(height, name,position, chewTobacco){
        super(height, name, 'Baseball', 'Indians')
        this.position = position
        this.chewTobacco = chewTobacco
    }
}

var ourPerson = new Person('6ft.','Randy')
// console.log(ourPerson)

var ourAthlete = new Athlete()
// console.log(ourAthlete)

var ourPlayer = new BaseballPlayer('6ft.', 'Randy','Center Field', 'true')
// ourPlayer.chewTobacco = false;
console.log(ourPlayer)

//<----------------End of Task-------------------------->

//()Task: Retroactive Modify element
//<----------------Beginning of the Task---------------->
//<----------------------------------------------------->


//<----------------End of Task-------------------------->

//()Task:
//<----------------Beginning of the Task---------------->
//<----------------------------------------------------->

//<----------------End of Task-------------------------->
