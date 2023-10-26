function openModal(){
    let modalContent = document.getElementById("model-content");
    let modalProject = document.getElementsByClassName("modalProject");
    if(modalContent.style.display ==="none" || modalContent.style.display === ""){
        modalContent.style.display ="block";
        modalProject.style.display ="none";
        

    }
    else{
        modalContent.style.display ="none";
        modalProject.style.display ="block";
    }

}