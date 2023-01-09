/*
I will be adding some code here and it should be basic and that is because
I want to learn the basics of JavaScript and also, get more familiar with 
git and github. 
please make sure to keep working on javascript and also git and github
to see how far you can reach in this tutorial.
Best of luck
*/

// This is an addition feature where we can display the time and make it work:
let displaytime =(()=>{
    let display = document.getElementById(`displaytime`);
    display.innerHTML = new Date();
});

setInterval(displaytime, 1000);


const number1 = document.getElementById(`number1`);
const number2 = document.getElementById(`number2`);

const button = document.getElementById(`submit`);

button.addEventListener(`click`, function(e){
    e.preventDefault();
    // Checking the two values to avoid errors:
    
            // calculate the two numbers above:
        try {
            let result = parseFloat(number1.value) + parseFloat(number2.value);
            alert(`The Additional Result = ${result}`);
            
            
        }
        catch {
            alert(`Something went wrong, please try again`)
        
    }
    console.log(typeof(number1.value))
    console.log(typeof(number2.value))
    
    
});