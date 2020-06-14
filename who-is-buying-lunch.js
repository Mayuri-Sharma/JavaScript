function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.
    const numberOfPeople = names.length;
    const randomPersonPosition = Math.floor(Math.random() * numberOfPeople);

    const randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!";
    


/******Don't change the code below*******/    
}

whosPaying(['Angela', 'Ben', 'Jenny', 'Michael', 'Chloe']);
