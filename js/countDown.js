
var eventDate = new Date('May 21, 2020 18:00:00');
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

    document.getElementById("divCd").innerHTML = (('0' +days).slice(-2)+":"+('0' +hours).slice(-2)+ ":" +('0' +minutes).slice(-2) + ":" +('0' +seconds).slice(-2));
    
}
timer = setInterval(countdown, 1000);

