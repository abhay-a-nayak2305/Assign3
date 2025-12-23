let a = 1;
function Red() {
    let buttonR = document.getElementById('box1');
    if (a == 1) {

        buttonR.style.backgroundColor = "red";
        buttonR.style.color = "white";
        a = 0;
    }
    else {
        buttonR.style.backgroundColor = "white";
        buttonR.style.color = "black";
        a = 1;
    }
}

let b = 1;
function Blue() {
    let buttonR = document.getElementById('box2');
    if (b == 1) {
        buttonR.style.backgroundColor = "blue";
        buttonR.style.color = "white";
        b = 0;
    }
    else {
        buttonR.style.backgroundColor = "white";
        buttonR.style.color = "black";
        b = 1;
    }
}

let g = 1;
function Green() {
    let buttonR = document.getElementById('box3');
    if (g == 1) {
        buttonR.style.backgroundColor = "green";
        buttonR.style.color = "white";
        g = 0;
    }
    else {
        buttonR.style.backgroundColor = "white";
        buttonR.style.color = "black";
        g = 1;
    }
}

let y = 1;
function Yellow() {
    let buttonR = document.getElementById('box4');
    if (y == 1) {
        buttonR.style.backgroundColor = "yellow";
        y = 0;
    }
    else {
        buttonR.style.backgroundColor = "white";
        y = 1;
    }
}

function Greet() {
    let input = document.getElementById('name');
    let x = input.value;
    if (x != "") {
        console.log(x);
        let text = document.getElementById('head');
        text.innerHTML = "Hello, " + x;
    }
}
