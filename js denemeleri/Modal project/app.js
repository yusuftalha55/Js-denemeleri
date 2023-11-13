function openModal(){
    let modalContent = document.getElementById("model-content");
    let hideModal = document.getElementById("hideModal");
    if(modalContent.style.display ==="none" || modalContent.style.display === ""){
        modalContent.style.display ="block";
        hideModal.style.display ="none";


    }
    else{
        modalContent.style.display ="none";
        hideModal.style.display ="block";
    }

}