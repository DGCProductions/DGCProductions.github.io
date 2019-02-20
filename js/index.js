var clicks = 0;
var highscore = 0;
var timer = 30;
var aa = document.getElementById("middle")
var ye = document.getElementById("time");
var ca = document.getElementById("clicks");
 var st = document.getElementById("start");
var hi = document.getElementById("high");
function game() {
  
  st.style.visibility = "hidden";
  aa.style.visibility = "visible";
  clicks = 0;
   ca.innerHTML = "Clicks: " + clicks
  window.setTimeout(timera, 1000)
}
function timera() {
  
    if(timer > 0) {
      timer = timer - 1;
    
    ye.innerHTML = "Time: " + timer
    
  window.setTimeout(timera, 1000)
    } else {
      st.style.visibility = "visible";
  aa.style.visibility = "hidden";
      timer = 30;
      ye.innerHTML = "Time: " + timer
    }
    
}

document.getElementById("middle").onclick = function() {
  var x =  Math.floor((Math.random() * 1200) + 1); 
  
  var y =  Math.floor((Math.random() * 300) + 1); 
  
    aa.style.left = x+"px";
  aa.style.top = y+"px";
  clicks = clicks + 1;
  ca.innerHTML = "Clicks: " + clicks
  
  if(clicks > highscore) {
    highscore = clicks;
    hi.innerHTML = "Highscore: " + highscore
  }
};