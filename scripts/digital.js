var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  if(m<10){
      m = "0" + m;
  }if(h<10){
    h = "0" + h;
}if(s<10){
    s = "0" + s;
}
  document.getElementById("txt").innerHTML = h + ":"+ m + ":" + s ;
}

