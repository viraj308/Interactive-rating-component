function swapCard() {
  document.getElementById("component1").className += " hidden";
  document.getElementById("component2").className += " visible";
}
function placeNumber(number, id_name) {
  var one = document.createTextNode(" " + number + " ");
  var two = document.getElementById("number");
  two.innerHTML = "";
  two.appendChild(one);
  /*  var three = document.getElementById(id_name);
  var four = document.getElementById("numbers");
  var buttons = four.childNodes;
  for (var i = 1; i < 10; i++) {
  }
  three.style.border = "1px solid red";  */
}
