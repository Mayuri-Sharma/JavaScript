// Prompt user for 2 names
prompt("What is your name?");
prompt("What is your lover's name?");

// Generate a random number between 1 to 100
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

// Generate an alert to show the love score to user
if(loveScore > 70) {
  alert("Your love score is " + loveScore + "%. You love each other like crazy.💕");
}
else if(loveScore > 30 && loveScore <= 70) {
   alert("Your love score is " + loveScore + "%.");
}
else {
 alert("Your love score is " + loveScore + "%. You go together like oil and water.😢");
}
