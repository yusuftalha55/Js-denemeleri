let ul = document.getElementById("ul");

input.addEventListener("keydown" , function(event){
    if(event.key === "Enter"){
        submitClick();

    }
})


function submitClick(){
    let input = document.getElementById("input").value;
    let resultLi = document.createElement("li");
    let resultBtn = document.createElement("button");
    resultBtn.innerHTML = "Sil";
    resultBtn.onclick = deleteBtn;
    ul.appendChild(resultLi);
    ul.appendChild(resultBtn);
    resultLi.textContent = input;

    function deleteBtn(){
        resultBtn.remove();
        resultLi.remove();
    }

}

function clearClick(){
    ul.innerHTML ="";
}