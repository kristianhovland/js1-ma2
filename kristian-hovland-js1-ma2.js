// Question 1 
const myFunctionExpression = function () {
    console.log("Kristian Landås Hovland")
}

// 2

const clickMeButton = document.querySelector(".btn");
clickMeButton.addEventListener("click", function () {
    console.log("Something clicked me");

// Question 3 

const textInput = document.querySelector("#firstName");
textInput.addEventListener("keydown", logKeyValue);

function logKeyValue(event) {
    console.dir(event.key);
}


// Question 4

const hoverOver = document.querySelector("button");

function callOnHover() {
  console.log("The cursor touched the button");
};

hoverOver.addEventListener("mouseover", callOnHover);

// Question 5

const hoverOut = document.querySelector("[data-animal='dog']");
hoverOut.addEventListener("mouseout", removeHoverClass);

function removeHoverClass() {
    hoverOut.classList.remove("hover");
}


// Question 6

const animals = document.querySelectorAll("li");

for (let i = 0; i < animals.length; i++) {
    animals[i].addEventListener("mouseover", logTypeOfAnimal)

    function logTypeOfAnimal() {
        console.dir(animals[i].dataset.animal);
    }
}

// Question 7

const animal = "cow";

switch(animal) {
    case "cat":
        console.log("Meow");
        break;
    case "cow":
        console.log("Moo");
        break;
    case "bird":
        console.log("Tweet");
        break;
    default:
        console.log("Harrumph");
}

// Question 8 
var sheep =["Malcolm", "Anders", "Marie"];
sheep.forEach(function(sheep) {
    console.log(sheep);
});

// Question 9 

function logTime() {
     console.log("hello");
        if(counter === 5) {
            clearInterval(intervalId);
        }
        counter++;
    }
    
    let counter = 0;
    const intervalId = setInterval(logTime, 500);

// Question 10

const container = document.querySelector(".container");

function textDelay() {
    container.innerText = "Text updated";
}

setTimeout(textDelay, 2000);
