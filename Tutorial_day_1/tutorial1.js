// This is a simple function that we are using to set the title as the current date and time.
//it is also working through setInterval to keep updating the clock as the website running:
function showTime(){
    t = new Date();
    document.getElementById(`title`).innerText = t;
}



//=========================================================================================
const total_count = 10;

function counting() {
    let count = 0;
    if (count == total_count){
        window.location.href=`http://www.google.com`;
    }
    else {
        count ++;
    }

}
setTimeout(counting, 1000);

setInterval(showTime, 1000);