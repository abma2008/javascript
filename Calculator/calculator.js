/*
I will be adding some code here and it should be basic and that is because
I want to learn the basics of JavaScript and also, get more familiar with 
git and github. 
please make sure to keep working on javascript and also git and github
to see how far you can reach in this tutorial.
Best of luck
*/


const number1 = document.getElementById(`number1`);
const number2 = document.getElementById(`number2`);

const calculate = document.getElementById(`calculate`);

calculate.addEventListener(`click`, function(e){
    e.preventDefault();
    // calculate the two numbers above:
    try {
        let result = parseFloat(number1.value) + parseFloat(number2.value);
        alert(`you will be viewing the results after clicking ok`);
        alert(result)
        
    }
    catch {
        alert(`Something went wrong, please try again`)
    }
})