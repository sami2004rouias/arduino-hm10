function drawScreen() {
  
  if (isConnected) {
    document.getElementById("status").innerHTML = "Connesso";
    document.getElementById("status").style.color = "rgb(12, 99, 162)";

  } else {
    document.getElementById("status").innerHTML = "Non Connesso";
    document.getElementById("status").style.color = "rgb(172, 60, 30)";


  }
}

