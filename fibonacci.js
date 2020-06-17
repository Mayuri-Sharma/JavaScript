function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    let output = [];

    if(n === 1) {
      output = [0];
    }
    else if(n === 2) {
      output = [0, 1];
    }
    else if (n > 2) {
      output = [0, 1];
     
      for(let i=2; i<n; i++) {
        output.push(output[output.length-2] + output[output.length-1]);
      

      }
    }
    
    
    //Return an array of fibonacci numbers starting from 0.
    return output;
    
//Do NOT change any of the code below 👇
}

const output = fibonacciGenerator(5);
console.log(output);
