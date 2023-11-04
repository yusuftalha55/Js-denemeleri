const targetYear = new Date("jan 1 , 2024 00:00:00").getTime();

function newYear(){
    let now = new Date().getTime();
    let result = targetYear - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let d = Math.floor((result/day));
    let h = Math.floor((result % day) / hour);
    let m = Math.floor((result % hour) / minute);
    let s = Math.floor((result % minute) / second);

    document.getElementById("day").innerText = d;
    document.getElementById("hour").innerText = h;
    document.getElementById("minute").innerText = m;
    document.getElementById("second").innerText = s;

}

setInterval(function(){
    newYear();
},1000)