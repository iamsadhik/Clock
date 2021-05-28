function timeDisplay(){
    var time = new Date();
    var hour = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var session = "AM" ;

    if(hour == 0){
        hour = 12
        session = "AM"
    }

    if(hour > 12){
        hour = hour -12;
        session = "PM";
    }

    if(hour >= 12){
        session = "PM";
      }

    hour = (hour < 10 ) ? "0" + hour : hour;
    minutes = (minutes < 10 ) ? "0" + minutes : minutes;
    seconds = (seconds < 10 ) ? "0" + seconds : seconds;

    var displayTime = hour + ":" + minutes + ":" + seconds + " " + session;
    document.getElementById("clockDisplay").innerText = displayTime;
    document.getElementById("clockDisplay").textContent = displayTime;

    setTimeout(timeDisplay, 1000);

}

timeDisplay();
