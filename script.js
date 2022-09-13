function swapCard() {
  document.getElementById("component1").className += " hidden";
  document.getElementById("component2").className += " visible";
}
function placeNumber(number, id_name) {
  var one = document.createTextNode(" " + number + " ");
  var two = document.getElementById("number");
  two.innerHTML = "";
  two.appendChild(one);
  var four = document.getElementById("numbers");
  var buttons = four.childNodes;
  for (var i = 1; i < 10; i = i + 2) {
    buttons[i].style.border = "1px solid hsl(217, 14%, 26%)";
  }
  var three = document.getElementById(id_name);
  three.style.border = "1px solid white";
}
