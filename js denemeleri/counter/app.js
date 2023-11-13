let start = 0;
document.getElementById("degisken").innerHTML= start;


function upper(){
    start++;
    document.getElementById("degisken").innerHTML= start;
}

function reset(){
    start=0;
    document.getElementById("degisken").innerHTML= start;
}

function down(){
    start--;
    document.getElementById("degisken").innerHTML= start;
}
