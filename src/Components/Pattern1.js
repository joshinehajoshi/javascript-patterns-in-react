import React from 'react';
import Star from './Star';

function Pattern1() {
    
    
        let n = 5; // row or column count
        // defining an empty string
        let string = "";
        
        for(let i = 0; i < n; i++) { // external loop
          for(let j = 0; j < n; j++) { // internal loop
            string += "*";
          }
          // newline after each row
          string += "\n";
        }
        // printing the string
        console.log(string);
    
    return (
       <h1> {string}</h1>
    )
}

export default Pattern1
