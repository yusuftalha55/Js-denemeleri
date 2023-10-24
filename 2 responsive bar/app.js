let secenekler = [
    document.getElementById("open1"),
    document.getElementById("open2"),
    document.getElementById("open3"),
    document.getElementById("open4")
];

let seceneklerIndex = 0;

function buttonClick() {
    var elements = document.getElementsByClassName("open");
    if (elements[seceneklerIndex].style.display="none" || secenekler[seceneklerIndex].style.display === "") {
        elements[seceneklerIndex].style.display = "block";
        
    }  else {
        elements[seceneklerIndex].style.display="";

    }
}
