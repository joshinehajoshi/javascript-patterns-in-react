import React from 'react'

function Pattern2() {

    let n = 5; // row or column count
    // defining an empty string
    let string = "";
    
    for(let i = 0; i < n; i++) { // external loop
      for(let j = i; j < n; j++) { // internal loop
        string += "*";
      }
      // newline after each row
      string += "\n";
      
    }
    // printing the string
    console.log(string);

    return (
        <>
            <h2>Pattern 2</h2>
            <h1> {string}</h1>
        </>
    )
}

export default Pattern2
