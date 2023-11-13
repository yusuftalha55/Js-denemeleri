function buttonClick(){
    var elements = document.getElementsByClassName("open");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].style.display === "none" || elements[i].style.display === "") {
            elements[i].style.display = "block"; // Elementi göster
        } else {
            elements[i].style.display = "none"; // Elementi gizle
        }
    }
}