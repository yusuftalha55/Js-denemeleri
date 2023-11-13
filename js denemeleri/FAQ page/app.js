let pOne = document.getElementById("pOne");
pOne.style.display = "none"

let ptwo = document.getElementById("ptwo");
pTwo.style.display = "none"

let pThree = document.getElementById("pThree");
pThree.style.display = "none"

function buttonOneClick(){

    if(pOne.style.display === "none"){
        pOne.style.display = "block";
        pThree.style.display = "none"
        pTwo.style.display = "none"

    }
    else{
        pOne.style.display = "none"
    }
}

function buttonTwoClick(){

    if(pTwo.style.display === "none"){
        pTwo.style.display = "block";
        pThree.style.display = "none"
        pOne.style.display = "none"
    }
    else{
        pTwo.style.display = "none"
    }
}

function buttonThreeClick(){

    if(pThree.style.display === "none"){
        pThree.style.display = "block";
        pOne.style.display = "none"
        pTwo.style.display = "none"
    }
    else{
        pThree.style.display = "none"
    }
}