let screen = document.getElementById("screen");
buttons = document.querySelectorAll(".button div");
let screenValue = "";

for (item of buttons) {
  item.addEventListener("click", e => {
    buttonText= e.target.innerText;
    console.log(buttonText);
    
    if(buttonText == "X"){
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    }
    
    else if (buttonText == "C"){
      screenValue = "";
      screen.value = screenValue;
    }
    
    
    else if (buttonText == "="){
      screen.value = eval(screenValue);
    }
    
    else{
      screenValue += buttonText;
      screen.value = screenValue;
    }
  })
}

// function timeDisplay(){
//     var time = new Date();
//     var hour = time.getHours();
//     var minutes = time.getMinutes();
//     var seconds = time.getSeconds();
//     var session = "AM" ;

//     if(hour == 0){
//         hour = 12
//         session = "AM"
//     }

//     if(hour > 12){
//         hour = hour -12;
//         session = "PM";
//     }

//     if(hour >= 12){
//         session = "PM";
//       }

//     hour = (hour < 10 ) ? "0" + hour : hour;
//     minutes = (minutes < 10 ) ? "0" + minutes : minutes;
//     seconds = (seconds < 10 ) ? "0" + seconds : seconds;

//     var displayTime = hour + ":" + minutes + ":" + seconds + " " + session;
//     document.getElementById("clockDisplay").innerText = displayTime;
//     document.getElementById("clockDisplay").textContent = displayTime;

//     setTimeout(timeDisplay, 1000);

// }

// timeDisplay();



