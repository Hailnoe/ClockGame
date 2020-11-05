var mins = 0; 
var secs = 0; 

function CountDown() { 
  document.getElementById("b1").disabled = true;
    setTimeout('Timer()', 90); 

} 

function Timer() { 
        minutes = document.getElementById("min"); 
        seconds = document.getElementById("sec");
         
        minutes.value = getMins(); 
        seconds.value = getSecs(); 
        document.getElementById("comment").innerHTML = "The countdown begins!!";
    
    if (secs < 20 && mins === 0) { 
            minutes.style.color = "#ff6600"; 
            seconds.style.color = "#ff6600";
            document.getElementById("comment").innerHTML = "Time is running!!"; 
        } 
    
        if (secs < 10 && mins === 0) { 
            minutes.style.color = "#cc0000"; 
            seconds.style.color = "#cc0000";
            document.getElementById("comment").innerHTML = "Time is less than 10seconds now!!"; 
        } 
        
        if (secs === 0) {
            secs === 59
            mins--
            minutes = document.getElementById("min"); 
            seconds = document.getElementById("sec");
            minutes.value = getMins(); 
            seconds.value = getSecs();
            
        }

        if (mins === 0  && secs === 0) {
            window.location.assign("http://hard-yarn.surge.sh/");
        }

        else { 
            secs--; 
            setTimeout('Timer()', 1000); 
        } 
}

function Minuteplus() {
    mins++ 
}

function Secondplus() {
    secs++
}

function getMins() { 
    return  mins
} 

function getSecs() { 
    return secs
}