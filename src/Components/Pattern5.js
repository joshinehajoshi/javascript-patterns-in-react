import React from 'react'

function Pattern5() {
    let n = 5; // row or column count
    // defining an empty string
    let string = "";
    
    for(let i = 0; i < n; i++) { // external loop
      for(let j = 0; j < n; j++) { // internal loop
        if(i%2==0 && j%2==0){
            string += "0";
        }
        else {
            string += "1";
        }
        
      }
      // newline after each row
      string += "\n";
      
    }
    // printing the string
    console.log(string);
    return (
        <>
            <h2>Pattern 5</h2>
            <h1> {string}</h1>
        </>
    )
}

export default Pattern5
