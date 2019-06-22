
function changeButton() {
  var x = "Original Text";
  var y = "Changed Text";

  var text = document.getElementById("testButton");

  if (text.innerHTML === x) {
    text.innerHTML = y;
  } else {
    text.innerHTML = x;
  }
}
