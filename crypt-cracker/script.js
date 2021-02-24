var rooms = ["room1", "room2", "room3", "room4", "room5",
			"room6", "room7", "room8", "room9", "room10",
			"room11", "room12", "room13", "room14"];

var currentRoom = 0;

function numOne() {
	document.getElementById(rooms[currentRoom]).value = 1;
	if(currentRoom <= 13){
		currentRoom++;
	}
}
function numTwo() {
	document.getElementById(rooms[currentRoom]).value = 2;
	if(currentRoom <= 13){
		currentRoom++;
	}
}
function numThree() {
	document.getElementById(rooms[currentRoom]).value = 3;
	if(currentRoom <= 13){
		currentRoom++;
	}
}
function setFocus(num) {
	currentRoom = num;
	document.getElementById(rooms[num]).value = "";
}
function resetRooms() {
	currentRoom = 0;
	for(i=0; i<=13; i++){
		document.getElementById(rooms[i]).value = "";
	}
}
function mouseDown(object) {
	object.style.backgroundColor="rgb(116, 111, 75)";
	object.style.color="White";
}
function mouseUp(object) {
	object.style.backgroundColor="rgb(231, 222, 142)"
	object.style.color="Black";
}