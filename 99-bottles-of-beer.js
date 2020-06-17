function BottlesOfBeer() {

  let numberOfBottles = 99;
  let bottleWord = " bottles ";

  while(numberOfBottles >= 0) {
    
    console.log(numberOfBottles + bottleWord + "of beer on the wall, "); 
    console.log(numberOfBottles + bottleWord + "of beer." );
    console.log("Take one down and pass it around, ");
    numberOfBottles -= 1;
   
    if(numberOfBottles === 1) {
       bottleWord = " bottle ";
    }
    else if(numberOfBottles === 0) {
      numberOfBottles = "no more";
      bottleWord = " bottles ";
    }
    console.log(numberOfBottles + bottleWord + "of beer on the wall.");
    console.log();
    
  }

  console.log("No more" + bottleWord + "of beer on the wall,\n" + numberOfBottles + bottleWord + "of beer.\nGo to the store and buy some more,\n99 bottles of beer on the wall.");
}

BottlesOfBeer();
