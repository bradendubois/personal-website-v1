function incrementTextDisplayed() {

  var id = document.getElementById("incrementer");
  id.setAttribute("num", parseInt(id.getAttribute("num")) + 1);
  id.innerHTML = "ID: " + id.getAttribute("num");

}
