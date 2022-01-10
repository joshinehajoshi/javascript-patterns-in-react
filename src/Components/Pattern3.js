import React from 'react'

function Pattern3() {

     let n = 5; // row or column count
        // defining an empty string
        let string = "";
        
        for(let i = 0; i < n; i++) { // external loop
          for(let j = 0; j < n; j++) { // internal loop
            if(i%2==0){
                string += "1";
            }
            else {
                string += "0";
            }
            
          }
          // newline after each row
          string += "\n";
          
        }
        // printing the string
        console.log(string);

    return (
        <>
            <h2>Pattern 3</h2>
            <h1> {string}</h1>
        </>
    )
}

export default Pattern3
