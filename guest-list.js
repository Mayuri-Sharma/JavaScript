var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var guestName = prompt("What is your Name?");

if(guestList.includes(guestName)) {
  alert("Welcome " + guestName + "!");
}
else {
  alert("Sorry, may be next time!")
}
