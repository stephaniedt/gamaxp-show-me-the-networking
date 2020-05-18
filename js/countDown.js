
var eventDate = new Date('2020,5,20, 12:00:00  ');
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var timer;



function countdown(){

    var currentTime = new Date();
    var remTime = eventDate.getTime() - currentTime.getTime();

    
    var days = Math.floor(remTime / d);
    var hours =  Math.floor((remTime % d) / h);
    var minutes =  Math.floor((remTime % h) / m);
    var seconds =  Math.floor((remTime % m) / s);

    //console.log("days: "+days ,"hours: "+hours, "minutes: "+minutes, "seconds: "+seconds);

    document.getElementById("days").textContent = 'days' + days;
    document.getElementById("hours").innerText = 'hours' + hours;
    document.getElementById("minutes").innerText = 'minutes' + minutes;
    document.getElementById("seconds").innerText = 'seconds' + seconds;

    
}
timer = setInterval(countdown, 1000);