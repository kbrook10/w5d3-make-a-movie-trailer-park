//Project Tasks
/*
~ Create (4) spaceships using: Object Literals, new Object, Constructor Function and class via ES6
*/

//()Task: Create spaceship using literal object
//<----------------Beginning of the Task---------------->
//<----------------------------------------------------->
var spaceship1 = {
    speed: Math.round(Math.random()* 5),
    name: 'Hoopty',
    launch: function(){
        console.log(spaceship1.name + ' launching to infinity and beyond at a top speed of ' + spaceship1.speed + 'lyph !')
    }
}
console.log(spaceship1.launch())
//<----------------End of Task-------------------------->

//()Task: Create spaceship using new Object
//<----------------Beginning of the Task---------------->
//<----------------------------------------------------->
var spaceship2 = new Object()
spaceship2.speed = Math.round(Math.random()*10 + 5)
spaceship2.name = 'Cadillac'
spaceship2.launch = function(){
    console.log(spaceship2.name + ' launching to infinity and beyond at a top speed of ' + spaceship2.speed + 'lyph !')
}
console.log(spaceship2.launch())
//<----------------End of Task-------------------------->

//()Task: Create spaceship using Constructor Function
//<----------------Beginning of the Task---------------->
//<----------------------------------------------------->


//<----------------End of Task-------------------------->

//()Task: Create spaceship using class via ES6
//<----------------Beginning of the Task---------------->
//<----------------------------------------------------->

//<----------------End of Task-------------------------->
