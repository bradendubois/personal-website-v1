
function initializeInfo() {

  setTimeout(showPlus, 750);
  setInterval(changeDescriptorLabels, 1500);

  //window.onload = initializeInfo;
}

function showPlus() {
  var messageArea = document.getElementById("description-plus");
  messageArea.innerHTML = " + ";
}

function changeDescriptorLabels() {

  var messageArea = document.getElementById("description-appended");
  var labelNumber = messageArea.getAttribute("label");
  var loops = messageArea.getAttribute("loops");

  if (loops >= 3) {
    messageArea.href = "https://www.linkedin.com/in/braden-dubois-2453b8149/";
    messageArea.innerHTML = "open to offers";
    return;
  }

  var labels = ["designer", "thing", "other-thing"];

  messageArea.innerHTML = labels[labelNumber];

  messageArea.setAttribute("label", (labelNumber + 1)  % labels.length);

  if (labelNumber == 0) {
    messageArea.setAttribute("loops", loops + 1);
  }
}
