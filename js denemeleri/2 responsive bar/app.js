let secenekler = [
    document.getElementById("open1"),
    document.getElementById("open2"),
    document.getElementById("open3"),
    document.getElementById("open4")
];

function buttonClick() {
    secenekler.forEach(function (secenek) {
        if (secenek.style.display === "none" || secenek.style.display === "") {
            secenek.style.display = "block";
        } else {
            secenek.style.display = "none";
        }
    });
}

