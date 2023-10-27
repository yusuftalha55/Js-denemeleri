function openModal(){
    let secondMain = document.querySelector(".secondMain");
    let main = document.querySelector(".main");
    if(secondMain.style.display === "none" || secondMain.style.display === ""){
        secondMain.style.display = "block";
        main.style.display = "none";
    }
    else{
        secondMain.style.display = "none";
        main.style.display = "block";
    }
}

function closeModal(){
    let secondMain = document.querySelector(".secondMain");
    let main = document.querySelector(".main");
    if(main.style.display === "none" || main.style.display === ""){
        secondMain.style.display = "none";
        main.style.display = "block";
    }
    else{
        secondMain.style.display = "block";
        main.style.display = "none";
    }


}
