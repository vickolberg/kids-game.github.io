let body = document.getElementsByTagName("body")[0];
let startTypingHere = document.getElementById("startTypingHere");
let result = document.getElementById("result");
let gameQuestion = document.getElementById("gameQuestion");
let container = document.getElementById("container");
let sequence = 0;
nextButton = undefined;

//index.html
function typingRed() {
    const keydownHandler = (e) => { //function to remove event
        if (e.key === "r" && sequence === 0) {
            result.innerHTML = ""
            startTypingHere.innerHTML = "R";
            sequence += 1;
            console.log(e.key);
        } else if (e.key === "e" && sequence === 1) {
            startTypingHere.innerHTML = "Re";
            sequence += 1;
            console.log(e.key);
        } else if (e.key === "d" && sequence === 2) {
            startTypingHere.innerHTML = "Red";
            result.innerHTML = "That is correct!";
            nextButton = document.createElement("button");
            nextButton.id = "nextButton";
            nextButton.innerHTML = "Next";
            nextButton.onclick = () => {
                window.location.href = "colorq2.html";
            };            
            container.appendChild(nextButton);
            body.removeEventListener("keydown", keydownHandler); // Remove the event listener
            console.log(e.key);
        } else {
            result.innerHTML = "Try again!"
            startTypingHere.innerHTML = "";
            console.log(e.key)
            sequence = 0;
        }
    };

    body.addEventListener("keydown", keydownHandler);
};

//colorq2.html
function typingYellow() {
    const keydownHandler = (e) => { //function to remove event
        if (e.key === "y" && sequence === 0) {
            result.innerHTML = ""
            startTypingHere.innerHTML = "Y";
            sequence += 1;
            console.log(e.key);
        } else if (e.key === "e" && sequence === 1) {
            startTypingHere.innerHTML = "Ye";
            sequence += 1;
            console.log(e.key);
        } else if (e.key === "l" && sequence === 2) {
            startTypingHere.innerHTML = "Yel";
            sequence += 1;
            console.log(e.key);            
        } else if (e.key === "l" && sequence === 3){
            startTypingHere.innerHTML = "Yell";
            sequence += 1;
            console.log(e.key);
        } else if (e.key === "o" && sequence === 4) {
            startTypingHere.innerHTML = "Yello";
            sequence += 1;
            console.log(e.key);
        } else if (e.key === "w" && sequence === 5){
            startTypingHere.innerHTML = "Yellow";
            console.log(e.key);
            result.innerHTML = "That is correct!";
            nextButton = document.createElement("button");
            nextButton.id = "nextButton";
            nextButton.innerHTML = "Next";
            nextButton.onclick = () => {
                window.location.href = "shapeq1.html";
            };            
            container.appendChild(nextButton);
            body.removeEventListener("keydown", keydownHandler); // Remove the event listener
        } else {
            result.innerHTML = "Try again!"
            startTypingHere.innerHTML = "";
            console.log(e.key)
            sequence = 0;
        }
    };

    body.addEventListener("keydown", keydownHandler);
};

//shapeq1
function typingHeart() {
    const keydownHandler = (e) => { //function to remove event
        if (e.key === "h" && sequence === 0) {
            result.innerHTML = ""
            startTypingHere.innerHTML = "H";
            sequence += 1;
            console.log(e.key);
        } else if (e.key === "e" && sequence === 1) {
            startTypingHere.innerHTML = "He";
            sequence += 1;
            console.log(e.key);
        } else if (e.key === "a" && sequence === 2) {
            startTypingHere.innerHTML = "Hea";
            sequence += 1;
            console.log(e.key);            
        } else if (e.key === "r" && sequence === 3){
            startTypingHere.innerHTML = "Hear";
            sequence += 1;
            console.log(e.key);
        } else if (e.key === "t" && sequence === 4) {
            startTypingHere.innerHTML = "Heart";
            console.log(e.key);
            result.innerHTML = "That is correct!";
            nextButton = document.createElement("button");
            nextButton.id = "nextButton";
            nextButton.innerHTML = "Next";
            nextButton.onclick = () => {
                window.location.href = "shapeq2.html";
            };            
            container.appendChild(nextButton);
            body.removeEventListener("keydown", keydownHandler); // Remove the event listener
        } else {
            result.innerHTML = "Try again!"
            startTypingHere.innerHTML = "";
            console.log(e.key)
            sequence = 0;
        }
    };

    body.addEventListener("keydown", keydownHandler);
};

//shapeq2
function typingStar() {
    const keydownHandler = (e) => { //function to remove event
        if (e.key === "s" && sequence === 0) {
            result.innerHTML = ""
            startTypingHere.innerHTML = "S";
            sequence += 1;
            console.log(e.key);
        } else if (e.key === "t" && sequence === 1) {
            startTypingHere.innerHTML = "St";
            sequence += 1;
            console.log(e.key);
        } else if (e.key === "a" && sequence === 2) {
            startTypingHere.innerHTML = "Sta";
            sequence += 1;
            console.log(e.key);            
        } else if (e.key === "r" && sequence === 3){
            startTypingHere.innerHTML = "Star";
            console.log(e.key);
            result.innerHTML = "That is correct!";
            nextButton = document.createElement("button");
            nextButton.id = "nextButton";
            nextButton.innerHTML = "Next";
            nextButton.onclick = () => {
                window.location.href = "index.html";
            };            
            container.appendChild(nextButton);
            body.removeEventListener("keydown", keydownHandler); // Remove the event listener
        } else {
            result.innerHTML = "Try again!"
            startTypingHere.innerHTML = "";
            console.log(e.key)
            sequence = 0;
        }
    };

    body.addEventListener("keydown", keydownHandler);
};
