/ Rover Object Goes Here
// ======================

// ======================
var rover = "northbound";
{
 direction: ["N", "S", "E", "W"]
}

switch (direction) {
 case "N":
   if (turnLeft === true) {
     turnLeft(rover);
   }
   else if (turnRight === true){
     turnRight(rover);
   }
   else {
     moveForward(rover);
   }
}

function turnLeft(rover){
 console.log("turnLeft was called!");
 if (direction = "N") {
         direction = "W";
         rover = "westbound"
 }
 else if (direction = "W") {
   direction = "S";
   rover = "southbound"
}
 else if (direction = "W") {
   direction = "S";
   rover = "southbound"
}
 else {
   direction = "N"
   rover = "northbound"
 }
}

function turnRight(rover){
 console.log("turnRight was called!");
}

function moveForward(rover){
 console.log("moveForward was called")
}