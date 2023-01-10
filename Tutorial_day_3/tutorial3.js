/*
I will be adding some code here and it should be basic and that is because
I want to learn the basics of JavaScript and also, get more familiar with 
git and github. 
please make sure to keep working on javascript and also git and github
to see how far you can reach in this tutorial.
Best of luck
*/
$(document).ready(function(){
    
// This is an addition feature where we can display the time and make it work:
let displaytime =(()=>{
    let display = document.getElementById(`displaytime`);
    display.innerHTML = new Date();
});

setInterval(displaytime, 1000);


const number1 = document.getElementById(`number1`);
const number2 = document.getElementById(`number2`);
// Setting the values of numbers to parseFloat:

const button = document.getElementById(`submit`);

button.addEventListener(`click`, function(e){
    e.preventDefault();
    if(isNaN(number1.value) || isNaN(number2.value))
    {
        alert(`something went wrong, cannot calculate empty values `)
    }
    else
    {
        try {
            let num1 = parseFloat(number1.value);
            let num2 = parseFloat(number2.value);
            let result = num1+ num2;
            alert(`The Additional Result = ${result}`);
                
                
        }catch {
            alert(`Something went wrong, please try again`)
            
        }
        
    }
    
    // this is the end of 
});


// This is the end of Jquery 
})