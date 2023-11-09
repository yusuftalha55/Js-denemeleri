let submit = document.getElementById("submit");
let clearBtn = document.getElementById("clearBtn");
let container = document.querySelector(".container");
let ul = document.getElementById("ul");

function submitClick(){
    let input = document.getElementById("input").value;
    let inputLi = document.createElement("li");
    inputLi.textContent = input;
    ul.appendChild(inputLi);
}

