let submit = document.getElementById("submit");
let clearBtn = document.getElementById("clearBtn");
let container = document.querySelector(".container");
let ul = document.getElementById("ul");

function submitClick() {
    let input = document.getElementById("input").value;
    let inputLi = document.createElement("li");
    let button = document.createElement("button");
    button.innerHTML = "sil";
    button.onclick = deleteBtn;
    inputLi.textContent = input;
    ul.appendChild(inputLi);
    ul.appendChild(button);

    function deleteBtn() {
        inputLi.remove();
        button.remove();
    }

    localStorage.setItem("liData",inputLi.textContent);

}

let getLiData = localStorage.getItem("liData");


function clearClick() {
    let ulChildren = Array.from(ul.children);
    ulChildren.forEach(function (childer) {
        childer.remove();

    })

}

