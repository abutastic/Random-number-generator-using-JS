// Get the id's of the button & label

const myButton = document.getElementById("myButton");
const Label = document.getElementById("myLabel");

const min = 1;
const max = 6;

let randomNum;

myButton.onclick = function(){
    randomNum = Math.floor(Math.random()*max)+min;
    Label.textContent = randomNum;
    console.log(randomNum);
}

